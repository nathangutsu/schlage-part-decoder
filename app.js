const EXAMPLES = [
  { label: "L9456L 06N L583-363 OS-OCC IS-OCC", value: "L9456L 06N L583-363 OS-OCC IS-OCC" },
  { label: "L9056 P6 03A 626 06 LH DT2-1/2 EO KA1BIT S123", value: "L9056 P6 03A 626 06 LH DT2-1/2 EO KA1BIT S123" },
  { label: "LV9492EL P6 06N 626 RX DM S123", value: "LV9492EL P6 06N 626 RX DM S123" },
  { label: "ND80 P6 8RO 626 RHO", value: "ND80 P6 8RO 626 RHO" },
  { label: "ALX70 P6 RHO 626", value: "ALX70 P6 RHO 626" },
  { label: "CO-100-CY-70-KP-SPA-626-P6-S123-RH", value: "CO-100-CY-70-KP-SPA-626-P6-S123-RH" },
  { label: "ND80EL P6 8RO 626 CON-26", value: "ND80EL P6 8RO 626 CON-26" }
];

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  children.forEach((c) => c && node.appendChild(c));
  return node;
}

function renderExamples() {
  const wrap = document.getElementById("exampleBtns");
  EXAMPLES.forEach((ex) => {
    const btn = el("button", { className: "ex-btn", text: ex.label });
    btn.type = "button";
    btn.addEventListener("click", () => {
      document.getElementById("partInput").value = ex.value;
      runDecode();
    });
    wrap.appendChild(btn);
  });
}

function renderFunctionInfo(functionInfo) {
  const container = document.getElementById("resultFunctionInfo");
  container.innerHTML = "";
  if (!functionInfo) return;

  const box = el("div", { className: "function-info" });
  box.appendChild(el("div", { className: "fi-title", text: "Function Details (Mechanical Lock Functions)" }));

  const codeRow = el("div", { className: "fi-row" });
  codeRow.appendChild(el("div", { className: "fi-label", text: "Function" }));
  const codeVal = el("div", { className: "fi-value" });
  codeVal.appendChild(el("code", { text: functionInfo.code }));
  codeRow.appendChild(codeVal);
  box.appendChild(codeRow);

  const descRow = el("div", { className: "fi-row" });
  descRow.appendChild(el("div", { className: "fi-label", text: "Description" }));
  descRow.appendChild(el("div", { className: "fi-value", text: functionInfo.description }));
  box.appendChild(descRow);

  const ansiRow = el("div", { className: "fi-row" });
  ansiRow.appendChild(el("div", { className: "fi-label", text: "ANSI Function No." }));
  if (functionInfo.ansi) {
    const ansiVal = el("div", { className: "fi-value" });
    ansiVal.appendChild(el("code", { text: functionInfo.ansi }));
    ansiRow.appendChild(ansiVal);
  } else {
    ansiRow.appendChild(el("div", { className: "fi-value ansi-missing", text: "Not listed in the source catalog for this function" }));
  }
  box.appendChild(ansiRow);

  if (functionInfo.full) {
    const full = functionInfo.full;
    const fullSection = el("div", { className: "fi-full" });
    fullSection.appendChild(el("div", { className: "fi-full-title", text: `Full Catalog Description — “${full.title}” (Schlage L Series Catalog)` }));
    const ul = el("ul", { className: "fi-bullets" });
    full.bullets.forEach((b) => {
      ul.appendChild(el("li", { text: b }));
    });
    fullSection.appendChild(ul);
    full.notes.forEach((n) => {
      fullSection.appendChild(el("div", { className: "fi-note", text: n }));
    });
    box.appendChild(fullSection);
  }

  container.appendChild(box);
}

function renderResults(result) {
  const seriesEl = document.getElementById("resultSeries");
  const rowsEl = document.getElementById("resultRows");
  rowsEl.innerHTML = "";

  if (!result.rows || result.rows.length === 0) {
    seriesEl.textContent = "";
    seriesEl.className = "";
    renderFunctionInfo(null);
    rowsEl.appendChild(el("div", { className: "empty-hint", text: "Enter a Schlage part number above and click Decode." }));
    return;
  }

  if (result.seriesLabel) {
    seriesEl.textContent = `Detected: ${result.seriesLabel}`;
    seriesEl.className = "";
  } else {
    seriesEl.textContent = "Series not recognized from the first matching token — showing best-effort matches against general code tables (finishes, handing, indicators, keying, common parts).";
    seriesEl.className = "none";
  }

  renderFunctionInfo(result.functionInfo);

  result.rows.forEach((row) => {
    const card = el("div", { className: "token-card" });
    card.appendChild(el("div", { className: "token-head", text: row.token }));
    const entriesEl = el("div", { className: "token-entries" });
    (row.entries || []).forEach((entry) => {
      const isUnrec = entry.label === "Unrecognized" || entry.label === "Unrecognized suffix";
      const entryEl = el("div", { className: "entry" + (isUnrec ? " unrecognized" : "") });
      entryEl.appendChild(el("div", { className: "elabel", text: entry.label }));
      entryEl.appendChild(el("div", { className: "edetail", text: entry.detail }));
      entriesEl.appendChild(entryEl);
    });
    card.appendChild(entriesEl);
    rowsEl.appendChild(card);
  });
}

function runDecode() {
  const input = document.getElementById("partInput").value;
  const result = decode(input);
  renderResults(result);
}

function buildDictTable(dict, keyHeader, valueHeader) {
  const table = el("table", { className: "ref-table" });
  const thead = el("thead", {}, [
    el("tr", {}, [
      el("th", { text: keyHeader }),
      el("th", { text: valueHeader })
    ])
  ]);
  const tbody = el("tbody");
  Object.keys(dict).sort().forEach((k) => {
    const codeCell = el("td");
    codeCell.appendChild(el("code", { text: k }));
    tbody.appendChild(el("tr", {}, [codeCell, el("td", { text: dict[k] })]));
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

function renderSeriesReference(container, series) {
  container.innerHTML = "";

  if (series.prefixes) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Series prefixes" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.prefixes, "Prefix", "Meaning"));
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.functions) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: `Function codes (${Object.keys(series.functions).length})` }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.functions, "Code", "Function"));
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.cylinderTypes) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Cylinder type codes" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.cylinderTypes, "Code", "Cylinder type"));
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.levers) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Lever / knob design codes" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.levers, "Code", "Design"));
    if (series.tactilePrefix) {
      body.appendChild(el("p", { text: `Tactile prefix "8": ${series.tactilePrefix}`, className: "empty-hint" }));
    }
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.leverTrimSuffix) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Trim / rose suffix (appended after lever code)" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.leverTrimSuffix, "Suffix", "Meaning"));
    if (series.concealedEscutcheonNote) {
      body.appendChild(el("p", { text: series.concealedEscutcheonNote, className: "empty-hint" }));
    }
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.chassis) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Chassis codes" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.chassis, "Code", "Chassis"));
    d.appendChild(body);
    container.appendChild(d);
  }

  if (series.functionSuffixes) {
    const d = el("details", { className: "ref" });
    d.appendChild(el("summary", { text: "Electrified suffixes" }));
    const body = el("div", { className: "ref-body" });
    body.appendChild(buildDictTable(series.functionSuffixes, "Suffix", "Meaning"));
    d.appendChild(body);
    container.appendChild(d);
  }

  const commonD = el("details", { className: "ref" });
  commonD.appendChild(el("summary", { text: "Shared: finishes, handing, indicators, keying, options" }));
  const commonBody = el("div", { className: "ref-body" });
  commonBody.appendChild(el("p", { text: "Finishes", className: "empty-hint" }));
  commonBody.appendChild(buildDictTable(COMMON.finishes, "Code", "Finish"));
  commonBody.appendChild(el("p", { text: "Handing", className: "empty-hint" }));
  commonBody.appendChild(buildDictTable(COMMON.handing, "Code", "Handing"));
  commonBody.appendChild(el("p", { text: "Status indicator options", className: "empty-hint" }));
  commonBody.appendChild(buildDictTable(COMMON.indicators, "Code", "Meaning"));
  commonBody.appendChild(el("p", { text: "Keying symbols", className: "empty-hint" }));
  commonBody.appendChild(buildDictTable(COMMON.keyingSymbols, "Code", "Meaning"));
  commonBody.appendChild(el("p", { text: "Common options / part numbers", className: "empty-hint" }));
  commonBody.appendChild(buildDictTable(COMMON.parts, "Code", "Meaning"));
  commonD.appendChild(commonBody);
  container.appendChild(commonD);
}

function renderReferenceTabs() {
  const tabsEl = document.getElementById("seriesTabs");
  const contentEl = document.getElementById("seriesRefContent");
  const keys = Object.keys(SERIES);

  function select(key) {
    Array.from(tabsEl.children).forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.key === key);
    });
    renderSeriesReference(contentEl, SERIES[key]);
  }

  keys.forEach((key, i) => {
    const btn = el("button", { className: "series-tab", text: SERIES[key].label });
    btn.type = "button";
    btn.dataset.key = key;
    btn.addEventListener("click", () => select(key));
    tabsEl.appendChild(btn);
    if (i === 0) btn.classList.add("active");
  });

  select(keys[0]);
}

document.addEventListener("DOMContentLoaded", () => {
  renderExamples();
  renderReferenceTabs();
  document.getElementById("decodeBtn").addEventListener("click", runDecode);
  document.getElementById("partInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") runDecode();
  });
  renderResults({ rows: [] });
});
