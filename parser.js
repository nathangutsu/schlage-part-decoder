/*
 * Token-by-token decoder for Schlage part-number strings.
 * Works across L, ND, ALX and CO-100 series data defined in data.js.
 */

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sortedKeys(dict) {
  return Object.keys(dict).sort((a, b) => b.length - a.length);
}

// Pulls an ANSI/BHMA function code (e.g. "F13", "A156.25") out of a
// function description string, if one is present.
function extractAnsiCode(description) {
  const m = description.match(/ANSI(?:\/BHMA)?\s+([A-Z0-9][A-Z0-9.\-]*)/i);
  return m ? m[1] : null;
}

function buildFunctionInfo(seriesLabel, code, description, seriesKey, digitCode) {
  const full = (seriesKey === "L" && typeof L_FUNCTION_DETAILS !== "undefined" && L_FUNCTION_DETAILS[digitCode]) || null;
  return {
    seriesLabel,
    code,
    description,
    ansi: extractAnsiCode(description),
    full
  };
}

// Attempts to parse a token as a "series + function [+ suffix]" identifier,
// e.g. "L9456L", "LV9492EL", "ND80", "ALXV80", trying every known series.
function tryParseSeriesFunction(token) {
  const upper = token.toUpperCase();
  for (const seriesKey of Object.keys(SERIES)) {
    const series = SERIES[seriesKey];
    if (!series.prefixes || !series.functions) continue;
    for (const prefix of sortedKeys(series.prefixes)) {
      if (!upper.startsWith(prefix)) continue;
      const rest = upper.slice(prefix.length);
      const m = rest.match(/^(\d{2,4})([A-Z0-9]{0,4})$/);
      if (!m) continue;
      const digits = m[1];
      let trailing = m[2] || "";
      if (!(digits in series.functions)) continue;

      const parts = [
        { label: "Series", detail: `${prefix} — ${series.prefixes[prefix]}` },
        { label: "Function", detail: `${digits} — ${series.functions[digits]}` }
      ];
      const functionInfo = buildFunctionInfo(series.label, `${prefix}${digits}`, series.functions[digits], seriesKey, digits);

      // Peel off an EL/EU electrified suffix if present.
      if (series.functionSuffixes) {
        for (const suf of sortedKeys(series.functionSuffixes)) {
          if (trailing.startsWith(suf)) {
            parts.push({ label: "Electrified suffix", detail: `${suf} — ${series.functionSuffixes[suf]}` });
            trailing = trailing.slice(suf.length);
            break;
          }
        }
      }

      // Whatever remains directly appended, try matching as a cylinder type.
      if (trailing && series.cylinderTypes && trailing in series.cylinderTypes) {
        parts.push({ label: "Cylinder type (appended)", detail: `${trailing} — ${series.cylinderTypes[trailing]}` });
        trailing = "";
      }

      if (trailing) {
        parts.push({ label: "Unrecognized suffix", detail: `“${trailing}” did not match a known electrified or cylinder-type code for ${series.label}` });
      }

      return { seriesKey, seriesLabel: series.label, parts, functionInfo };
    }
  }
  return null;
}

function tryParseCylinderType(token, series) {
  if (!series || !series.cylinderTypes) return null;
  const upper = token.toUpperCase();
  if (upper in series.cylinderTypes) {
    return { label: "Cylinder type", detail: `${upper} — ${series.cylinderTypes[upper]}` };
  }
  return null;
}

function tryParseLever(token, series) {
  if (!series || !series.levers) return null;
  const upper = token.toUpperCase();

  // Irregular tactile abbreviations (e.g. "8RO" for Rhodes) don't follow the
  // "8"+full-code pattern, so check the explicit map before the regex path.
  if (series.tactileCodes && upper in series.tactileCodes) {
    const code = series.tactileCodes[upper];
    const parts = [{ label: "Lever / knob design", detail: `${code} — ${series.levers[code]} (tactile warning variant, code ${upper})` }];
    if (series.tactilePrefix) {
      parts.push({ label: "Tactile prefix (“8”)", detail: series.tactilePrefix });
    }
    return parts;
  }

  const leverCodes = sortedKeys(series.levers).map(escapeRegex).join("|");
  const suffixDict = series.leverTrimSuffix;
  const suffixChars = suffixDict ? sortedKeys(suffixDict).join("") : "";
  const suffixGroup = suffixDict ? `([${suffixChars}])?` : "";
  const re = new RegExp(`^(8)?(${leverCodes})${suffixGroup}$`);
  const m = upper.match(re);
  if (!m) return null;

  const parts = [];
  const tactile = m[1];
  const code = m[2];
  const suffix = suffixDict ? m[3] : undefined;

  let leverLabel = `${code} — ${series.levers[code]}`;
  if (tactile) leverLabel = `8${leverLabel} (tactile warning variant)`;
  parts.push({ label: "Lever / knob design", detail: leverLabel });
  if (tactile && series.tactilePrefix) {
    parts.push({ label: "Tactile prefix (“8”)", detail: series.tactilePrefix });
  }
  if (suffix) {
    parts.push({ label: "Trim / rose", detail: `${suffix} — ${suffixDict[suffix]}` });
  }
  return parts;
}

function tryParseFinish(token) {
  const upper = token.toUpperCase();
  if (upper in COMMON.finishes) {
    return { label: "Finish", detail: `${upper} — ${COMMON.finishes[upper]}` };
  }
  return null;
}

function tryParseHanding(token) {
  const upper = token.toUpperCase();
  if (upper in COMMON.handing) {
    return { label: "Handing", detail: `${upper} — ${COMMON.handing[upper]}` };
  }
  return null;
}

function tryParseIndicator(token) {
  const upper = token.toUpperCase();
  if (upper in COMMON.indicators) {
    return { label: "Status indicator option", detail: `${upper} — ${COMMON.indicators[upper]}` };
  }
  return null;
}

function tryParsePart(token) {
  const upper = token.toUpperCase();
  if (upper in COMMON.parts) {
    return { label: "Option / part number", detail: `${upper} — ${COMMON.parts[upper]}` };
  }
  return null;
}

function tryParseKeyingSymbol(token) {
  const upper = token.toUpperCase();
  if (upper in COMMON.keyingSymbols) {
    return { label: "Keying", detail: `${upper} — ${COMMON.keyingSymbols[upper]}` };
  }
  for (const p of COMMON.patterns) {
    const m = upper.match(p.test);
    if (m) {
      return { label: p.label || "Keying", detail: p.describe(m) };
    }
  }
  return null;
}

// Classify a single token against every known lookup for a given series
// (or against common tables only, if series is unknown). Returns an array
// of {label, detail} entries — usually one, but a token can legitimately
// carry more than one piece of info (handled by the specific try* fns).
function classifyToken(token, series) {
  if (!token) return [];

  // "LLL" (Less brand code) sometimes gets typo'd/concatenated directly onto
  // the next field with no space, e.g. "LLLN" meaning "LLL" + "N". Split it.
  if (token.toUpperCase().startsWith("LLL") && token.length > 3) {
    const rest = token.slice(3);
    const restUpper = rest.toUpperCase();
    const lllEntry = { label: "Brand", detail: `LLL — ${COMMON.parts.LLL}` };
    let restEntries;
    if (series && series.leverTrimSuffix && restUpper in series.leverTrimSuffix) {
      restEntries = [{ label: "Trim / rose", detail: `${restUpper} — ${series.leverTrimSuffix[restUpper]}` }];
    } else {
      restEntries = classifyToken(rest, series);
    }
    return [lllEntry, ...restEntries];
  }

  // CO-100's function code is its own token (not fused with the series
  // prefix like L/ND/ALX), so check it explicitly here.
  if (series && series.key === "CO100" && series.functions && token.toUpperCase() in series.functions) {
    const upper = token.toUpperCase();
    return [{ label: "Function", detail: `${upper} — ${series.functions[upper]}` }];
  }

  // EL/EU is usually fused onto the function code (handled in
  // tryParseSeriesFunction), but catalogs also show it specified as its
  // own token — recognize that form too.
  if (series && series.functionSuffixes && token.toUpperCase() in series.functionSuffixes) {
    const upper = token.toUpperCase();
    return [{ label: "Electrified suffix", detail: `${upper} — ${series.functionSuffixes[upper]}` }];
  }

  const cyl = tryParseCylinderType(token, series);
  if (cyl) return [cyl];

  const lever = tryParseLever(token, series);
  if (lever) return lever;

  const finish = tryParseFinish(token);
  if (finish) return [finish];

  const handing = tryParseHanding(token);
  if (handing) return [handing];

  const indicator = tryParseIndicator(token);
  if (indicator) return [indicator];

  const part = tryParsePart(token);
  if (part) return [part];

  const keying = tryParseKeyingSymbol(token);
  if (keying) return [keying];

  // CO-100 field dictionaries (chassis / reader) reused generically here.
  if (series && series.chassis && token.toUpperCase() in series.chassis) {
    return [{ label: "Chassis", detail: `${token.toUpperCase()} — ${series.chassis[token.toUpperCase()]}` }];
  }
  if (series && series.reader && token.toUpperCase() in series.reader) {
    return [{ label: "Reader", detail: `${token.toUpperCase()} — ${series.reader[token.toUpperCase()]}` }];
  }
  if (series && series.knownMultiPart && token in series.knownMultiPart) {
    return [{ label: "Latch / strike / hardware", detail: `${token} — ${series.knownMultiPart[token]}` }];
  }

  return [{ label: "Unrecognized", detail: `“${token}” didn't match a known code. It may be a custom option, a deviation from defaults, or a code not yet in this tool's reference data — check the Allegion price book.` }];
}

// Special-cased tokenizer/parser for CO-100, whose canonical example uses
// hyphens as the field separator while some fields (latch, strike) are
// themselves two hyphen-joined numbers (e.g. "13-247").
function parseCO100(input) {
  const series = SERIES.CO100;
  let rest = input.trim();
  const prefixMatch = rest.match(/^CO-?100[\s-]*/i);
  if (!prefixMatch) return null;
  rest = rest.slice(prefixMatch[0].length);

  // Protect known two-part literal codes before splitting, using markers
  // that can't collide with real token text (whole-token match on restore).
  let protectedStr = rest;
  const restoreMap = {};
  Object.keys(series.knownMultiPart).forEach((code, i) => {
    const key = `MULTIPART${i}`;
    if (protectedStr.includes(code)) {
      protectedStr = protectedStr.split(code).join(key);
      restoreMap[key] = code;
    }
  });

  const rawTokens = protectedStr.split(/[\s-]+/).filter(Boolean);
  const tokens = rawTokens.map((t) => (t in restoreMap ? restoreMap[t] : t));

  const rows = [
    { token: "CO-100", entries: [{ label: "Series", detail: "CO-100 — Standalone electronic lock series" }] }
  ];
  let functionInfo = null;
  tokens.forEach((t) => {
    rows.push({ token: t, entries: classifyToken(t, series) });
    const upper = t.toUpperCase();
    if (!functionInfo && series.functions && upper in series.functions) {
      functionInfo = buildFunctionInfo(series.label, upper, series.functions[upper], "CO100", upper);
    }
  });
  return { seriesKey: "CO100", seriesLabel: series.label, rows, functionInfo };
}

function decode(input) {
  const trimmed = (input || "").trim();
  if (!trimmed) return { rows: [], seriesLabel: null };

  if (/^CO-?100\b/i.test(trimmed)) {
    const result = parseCO100(trimmed);
    if (result) return result;
  }

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const rows = [];
  let detectedSeries = null;
  let functionInfo = null;

  tokens.forEach((token, idx) => {
    if (!detectedSeries) {
      const sf = tryParseSeriesFunction(token);
      if (sf) {
        detectedSeries = SERIES[sf.seriesKey];
        functionInfo = sf.functionInfo;
        rows.push({ token, entries: sf.parts, seriesLabel: sf.seriesLabel });
        return;
      }
    }
    const entries = classifyToken(token, detectedSeries);
    rows.push({ token, entries });
  });

  return {
    rows,
    seriesLabel: detectedSeries ? detectedSeries.label : null,
    seriesKey: detectedSeries ? detectedSeries.key : null,
    functionInfo
  };
}
