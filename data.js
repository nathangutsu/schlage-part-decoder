/*
 * Schlage part-number reference data.
 * Compiled from Allegion catalogs (2026):
 *   - Schlage_L_Series_Catalog_102899.pdf
 *   - Schlage_ND_Series_Catalog_106501.pdf
 *   - Schlage_ALX_Series_Catalog_113231.pdf
 *   - Schlage_CO-100_Data_Sheet_104186.pdf
 *   - Schlage_Key_Systems_Cylinders_and_Keys_Catalog_109487.pdf
 *   - Allegion_Connect_Data_Sheet_110220.pdf
 *   - Schlage_L_Series_Cut_Sheet_113141.pdf
 */

const COMMON = {
  finishes: {
    "605": "Bright Brass",
    "606": "Satin Brass",
    "609": "Antique Brass",
    "612": "Satin Bronze",
    "613": "Oil-Rubbed Bronze",
    "619": "Satin Nickel",
    "622": "Matte Black",
    "625": "Bright Chrome",
    "626": "Satin Chrome",
    "626AM": "Satin Chrome, Antimicrobial coating",
    "629": "Bright Stainless Steel",
    "630": "Satin Stainless Steel",
    "630AM": "Satin Stainless Steel, Antimicrobial coating",
    "643e": "Aged Bronze"
  },

  handing: {
    "LH": "Left Hand",
    "LHR": "Left Hand Reverse",
    "RH": "Right Hand",
    "RHR": "Right Hand Reverse"
  },

  indicators: {
    "OS-LOC": "Outside trim indicator — “LOCKED” message",
    "IS-LOC": "Inside trim indicator — “LOCKED” message",
    "OS-OCC": "Outside trim indicator — “OCCUPIED” message",
    "IS-OCC": "Inside trim indicator — “OCCUPIED” message",
    "OS-DND": "Outside trim indicator — “DO NOT DISTURB” message",
    "IS-DND": "Inside trim indicator — “DO NOT DISTURB” message",
    "OS-SYM": "Outside trim indicator — symbol style (“UNLOCKED/VACANT”)",
    "IS-SYM": "Inside trim indicator — symbol style (“UNLOCKED/VACANT”)",
    "OS-LOCFR": "Outside trim indicator — “LOCKED”, French/retrofit style",
    "IS-LOCFR": "Inside trim indicator — “LOCKED”, French/retrofit style",
    "OS-OCCFR": "Outside trim indicator — “OCCUPIED”, French/retrofit style",
    "IS-OCCFR": "Inside trim indicator — “OCCUPIED”, French/retrofit style"
  },

  keyingSymbols: {
    "KD": "Keyed Different — each cylinder operates by its own unique key (default when unspecified)",
    "MK": "Master Keyed — cylinders operate individually but also by a common master key",
    "GMK": "Grand Master Keyed — top tier of a multi-level master-key system"
  },

  // Recognized standalone option / hardware part numbers that show up appended
  // to Schlage order strings across series.
  parts: {
    "L583-363": "Large ADA thumbturn assembly (used with 09-509 basic thumbturn base)",
    "L583-474": "Mortise cylinder cam, 1-1/8\"–1-5/8\" lengths (standard Schlage functions)",
    "L583-475": "Mortise cylinder cam, 1-1/4\"–1-3/4\" lengths (standard Schlage functions)",
    "L583-254": "Classic-keyway cylinder cam (legacy, pre-Aug. 2010)",
    "L583-153": "Everest/Primus cylinder cam (legacy, pre-Aug. 2010)",
    "L583-333": "Installation/removal tool, full-size interchangeable core",
    "L583-375": "Special option: chevron indicator with “OCCUPIED” message (L9486, L9496, L496 sectional trim)",
    "L283-124": "Coin turn trim",
    "09-544": "ADA thumbturn (standard)",
    "09-509": "Basic thumbturn (base for large ADA thumbturn with L583-363)",
    "09-611": "Chevron-style occupancy indicator (LOCKED / OCCUPIED / DO NOT DISTURB)",
    "09-900": "Classroom thumbturn cylinder, no collar",
    "09-904": "Classroom thumbturn cylinder, compression ring and spring",
    "09-905": "Classroom thumbturn cylinder, ring/spring/blocking ring for 1-3/4\" doors",
    "10-091": "Armored front strike (for double-door dummy/strike applications)",
    "LLL": "Brand field code for “Less” — used when specifying that some other attribute (lever, rose, cylinder, etc.) is being ordered as “less” (omitted/not furnished)",
    "XL11-635": "Special option: cylinder x thumbturn deadbolt with fixed levers (L9460)",
    "XL11-886": "Special option: inside active lever deadbolt configuration (L9460/L9464/L9462)",
    "XL11-446": "Special option: privacy with thumbturn both sides (L9040)",
    "XL11-557": "Special option: prison function trim (L9485)",
    "XL13-439": "Special option: key override — a specialized outside key-override feature for L Series heavy-duty mortise locks. Allows an emergency or master key to retract the deadbolt or latchbolt even if someone inside is physically holding the thumbturn in a locked position",
    "XL13-228": "Likely a typo of XL13-439 — special option: key override — a specialized outside key-override feature for L Series heavy-duty mortise locks. Allows an emergency or master key to retract the deadbolt or latchbolt even if someone inside is physically holding the thumbturn in a locked position",
    "XL11-515": "Special option: lead lining (L9000 series)",
    "XL12-216": "Special option: lead lining (L400 series)",
    "XL11-743": "Optional blank armor front with deadbolt cutout",
    "XN12-001": "Special option: vestibule lock, interior unlocking only (ND60)",
    "XN12-002": "Special option: communicating lock configuration (ND72)",
    "XN12-003": "Special option: Vandlgard communicating lock configuration (ND72)",
    "XN12-012": "Special option: chassis spacer kit",
    "XN12-307": "Special option: lead lining kit",
    "43-005": "5\" backset extension kit",
    "N123-062": "Request-to-Exit (RX) field-add kit",
    "RX": "Request to Exit — monitors lever rotation for egress",
    "LX": "Latchbolt monitor — senses latchbolt position",
    "DPS": "Door position switch/sensor",
    "DM": "Deadbolt monitor — senses deadbolt projected/retracted state",
    "12/24": "12V or 24V DC — wired electrified input voltage, auto-detected on most functions (24V DC only required on motorized latch retraction functions)",
    "12/24V": "12V or 24V DC — wired electrified input voltage, auto-detected on most functions (24V DC only required on motorized latch retraction functions)",
    "12/24VDC": "12V or 24V DC — wired electrified input voltage, auto-detected on most functions (24V DC only required on motorized latch retraction functions)",
    "12/24VCD": "12V or 24V DC (“VCD” is a common typo of “VDC”) — wired electrified input voltage, auto-detected on most functions (24V DC only required on motorized latch retraction functions)",
    "VDC": "Volts DC — DC input voltage unit",
    "VCD": "Volts DC (“VCD” is a common typo of “VDC”) — DC input voltage unit",
    "PCL": "ANSI strike box (pre-cut lip / strike box option)",
    "TORX": "Tamper-resistant Torx security screws",
    "SCRSTD": "Standard (non-tamper-resistant) screws",
    "BAA": "Buy American Act compliant",

    // Allegion Connect (ConneX) — cross-category quick-connect wiring system
    // shared by Schlage, Von Duprin, Falcon and IVES electrified hardware.
    "CON": "Allegion Connect (ConneX) — quick-connect wiring option; factory-installed connectors join electrified hardware to power transfer hinges/access control without cutting wire",
    "CON-6": "Allegion Connect wiring harness, 6\" length, connectors on both ends",
    "CON-6P": "Allegion Connect wiring harness, 6\" length, connector on one end / crimped pins on the other",
    "CON-6W": "Allegion Connect power-supply harness, 6\" length, connector on one end / flying leads on the other (direct connection to power supply)",
    "CON-12": "Allegion Connect wiring harness, 12\" length, connectors on both ends",
    "CON-12P": "Allegion Connect wiring harness, 12\" length, connector on one end / crimped pins on the other",
    "CON-26": "Allegion Connect wiring harness, 26\" length, connectors on both ends",
    "CON-26P": "Allegion Connect wiring harness, 26\" length, connector on one end / crimped pins on the other",
    "CON-32": "Allegion Connect wiring harness, 32\" length, connectors on both ends",
    "CON-32P": "Allegion Connect wiring harness, 32\" length, connector on one end / crimped pins on the other",
    "CON-38": "Allegion Connect wiring harness, 38\" length, connectors on both ends",
    "CON-38P": "Allegion Connect wiring harness, 38\" length, connector on one end / crimped pins on the other",
    "CON-44": "Allegion Connect wiring harness, 44\" length, connectors on both ends",
    "CON-44P": "Allegion Connect wiring harness, 44\" length, connector on one end / crimped pins on the other",
    "CON-50": "Allegion Connect wiring harness, 50\" length, connectors on both ends",
    "CON-50P": "Allegion Connect wiring harness, 50\" length, connector on one end / crimped pins on the other",
    "CON-192": "Allegion Connect wiring harness, 192\" length, connectors on both ends",
    "CON-192P": "Allegion Connect wiring harness, 192\" length, connector on one end / crimped pins on the other",
    "EPT10-CON": "Von Duprin EPT10 electric power transfer hinge, Allegion Connect-ready (must be ordered with the exit device or lock)",
    "EPT-10-CON": "Von Duprin EPT10 electric power transfer hinge, Allegion Connect-ready (must be ordered with the exit device or lock)"
  },

  // Regex-driven matchers for token families that aren't fixed dictionaries.
  patterns: [
    {
      label: "Door prep",
      test: /^DT(\d+(-\d+\/\d+)?)$/,
      describe: (m) => `Door thickness: ${m[1]}\" (deviation from the 1-3/4\" default)`
    },
    {
      label: "Door prep",
      test: /^EE$/,
      describe: () => "Extended Equally (both faces trimmed evenly) — default"
    },
    {
      label: "Door prep",
      test: /^EO$/,
      describe: () => "Extended One side"
    },
    {
      label: "Door prep",
      test: /^EI$/,
      describe: () => "Extended Inside"
    },
    {
      label: "Door prep",
      test: /^ED$/,
      describe: () => "Extended Difference (unequal split between faces)"
    },
    {
      label: "Keying",
      test: /^(KA)(\d+)([A-Z0-9]*)$/,
      describe: (m) => `Keyed Alike, group of ${m[2]}${m[3] ? " (keyway/system suffix " + m[3] + ")" : ""} — cylinders share one change key`
    },
    {
      // Everest / Classic style keyway codes, e.g. S123, S145, R125, C123, T145, B123, E123, D123
      label: "Keying",
      test: /^(S|T|R|C|E|D|B)(1\d{2}|2\d{2}|3\d{2})$/,
      describe: (m) => {
        const fam = {
          S: "Everest 29 — open keyway family",
          T: "Everest 29 — end-user restricted keyway family (requires letter of authorization)",
          R: "Everest 29 — dealer/locksmith restricted keyway family (highest control tier, SFIC/SL 7-pin)",
          C: "Classic (Obverse) — open keyway family",
          E: "Classic — default master-keyed keyway family",
          B: "Everest (legacy) — restricted keyway family, SFIC",
          D: "Everest (legacy) — restricted keyway family"
        };
        return `Keyway code ${m[0]}: ${fam[m[1]]}`;
      }
    }
  ]
};

const SERIES = {
  L: {
    key: "L",
    label: "L Series Mortise Lock",
    prefixes: {
      "LMV": "L Series multi-latch (2- or 3-point) with Vandlgard® vandal-resistant lever",
      "LM": "L Series multi-latch (2- or 3-point lock, used with exit devices/multi-point rod sets)",
      "LV": "L Series with Vandlgard® — outside lever spins freely when locked to resist vandalism/prying",
      "L": "L Series standard mortise lock"
    },
    functionSuffixes: {
      "EL": "Electrified locked — per the Product Identification Guide. Fail safe/fail secure operating mode is set separately via a field-selectable switch on the chassis (not fixed by EL/EU), except on L9510, L9580 and L9582",
      "EU": "Electrified unlocked — per the Product Identification Guide. Fail safe/fail secure operating mode is set separately via a field-selectable switch on the chassis (not fixed by EL/EU), except on L9510, L9580 and L9582"
    },
    functions: {
      "9010": "Passage latch (ANSI F01) — levers both sides, latchbolt only",
      "9025": "Exit or communicating lock (ANSI F31) — no outside trim, inside lever retracts latch",
      "9040": "Bath/bedroom privacy lock (ANSI F22) — emergency thumbturn access outside",
      "9044": "Privacy with thumbturn both sides",
      "9412": "Exit lock with deadbolt",
      "9440": "Privacy with deadbolt (ANSI F19)",
      "9444": "Privacy with deadbolt and coin turn outside",
      "0170": "Half dummy trim",
      "0172": "Full dummy trim",
      "9110": "Full dummy trim with active levers",
      "9175": "Half dummy trim with lock case",
      "9176": "Full dummy trim with lock case",
      "9050": "Entrance/office lock (ANSI F04) — base function, reconfigurable to 7 others",
      "9026": "Exit lock with cylinder",
      "9056": "Entrance/office lock with automatic unlocking",
      "9070": "Classroom lock, exterior lockdown only (ANSI F05)",
      "9076": "Classroom holdback lock, exterior lockdown only (ANSI F06)",
      "9080": "Storeroom lock (ANSI F07)",
      "9081": "Accessible storeroom lock",
      "9060": "Apartment entrance lock (ANSI F09)",
      "9066": "Store lock",
      "9071": "Classroom security lock, interior/exterior lockdown (ANSI F32)",
      "9077": "Classroom security holdback lock, interior/exterior lockdown",
      "9082": "Institution lock (ANSI F30)",
      "9453": "Entrance/office lock with deadbolt (ANSI F20)",
      "9456": "Corridor lock with deadbolt (ANSI F13)",
      "9460": "Cylinder x thumbturn deadbolt (mortise deadbolt, ANSI F17; with fixed levers via XL11-635)",
      "9464": "Cylinder only mortise deadbolt (ANSI F18)",
      "9465": "Closet/storeroom lock with deadbolt",
      "9473": "Dormitory/bedroom lock (ANSI F21)",
      "9480": "Storeroom lock with deadbolt",
      "9485": "Faculty/hotel restroom lock with deadbolt",
      "9486": "Faculty/hotel restroom lock with chevron indicator",
      "9496": "Corridor lock with chevron indicator",
      "9457": "Classroom security lock with deadbolt (ANSI F33)",
      "9458": "Classroom security lock with deadbolt and auxiliary latch (ANSI F34)",
      "9462": "Double cylinder mortise deadbolt (ANSI F16; with active inside lever via XL11-886)",
      "9463": "Cylinder x cylinder thumbturn mortise deadbolt (ANSI F29)",
      "9466": "Utility room/storeroom lock with deadbolt (ANSI F14)",
      "9482": "Institution lock with deadbolt",
      "460": "Cylinder x thumbturn small-case mortise deadbolt (E06071)",
      "462": "Double cylinder small-case mortise deadbolt (E06061)",
      "463": "Cylinder x cylinder thumbturn small-case mortise deadbolt (E06091)",
      "464": "Cylinder only small-case mortise deadbolt (E06081)",
      "480": "Thumbturn only small-case mortise deadbolt",
      "496": "Cylinder x thumbturn small-case mortise deadbolt with chevron indicator",
      "9090": "Electrically locking/unlocking outside lever, no cylinder",
      "9091": "Electrically locking/unlocking both levers, no cylinder",
      "9092": "Electrically locking/unlocking outside lever, outside cylinder",
      "9093": "Electrically locking/unlocking both levers, outside cylinder",
      "9095": "Electrically locking/unlocking both levers, double cylinder",
      "9492": "Electrically locking/unlocking outside lever, outside cylinder, inside thumbturn, with deadbolt",
      "9493": "Electrically locking/unlocking both levers, outside cylinder, with deadbolt",
      "9494": "Electrically locking/unlocking outside lever, double cylinder, with deadbolt",
      "9495": "Electrically locking/unlocking both levers, double cylinder, with deadbolt",
      "9510": "Passage latch with motorized latch retraction",
      "9580": "Storeroom lock with motorized latch retraction",
      "9582": "Institution lock with motorized latch retraction",
      "9692": "Electrically locking/unlocking outside lever, outside cylinder, motorized latch retraction",
      "9695": "Electrically locking/unlocking both levers, double cylinder, motorized latch retraction",
      "9696": "Electrically locking/unlocking inside lever, double cylinder, motorized latch retraction",
      "9210": "2-point passage latch (LM9200 multi-point)",
      "9225": "2-point exit lock (LM9200 multi-point)",
      "9250": "2-point entrance/office lock (LM9200 multi-point)",
      "9256": "2-point entrance/office lock with automatic unlocking (LM9200 multi-point)",
      "9270": "2-point classroom lock, exterior lockdown only (LM9200 multi-point)",
      "9271": "2-point classroom security lock, interior/exterior lockdown (LM9200 multi-point)",
      "9280": "2-point storeroom lock (LM9200 multi-point)",
      "9290": "Electrically locking/unlocking outside lever, no cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9291": "Electrically locking/unlocking both levers, no cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9292": "Electrically locking/unlocking outside lever, outside cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9293": "Electrically locking/unlocking both levers, outside cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9294": "Electrically locking/unlocking outside lever, double cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9295": "Electrically locking/unlocking both levers, double cylinder, 2-point lock (LM9200 multi-point electrified)",
      "9310": "3-point passage latch (LM9300 multi-point)",
      "9325": "3-point exit lock (LM9300 multi-point)",
      "9350": "3-point entrance/office lock (LM9300 multi-point)",
      "9370": "3-point classroom lock, exterior lockdown only (LM9300 multi-point)",
      "9371": "3-point classroom security lock, interior/exterior lockdown (LM9300 multi-point)",
      "9380": "3-point storeroom lock (LM9300 multi-point)"
    },
    cylinderTypes: {
      "P6": "6-pin conventional cylinder (default)",
      "P": "6-pin cylinder, keyed 5-pin",
      "Z": "Everest SL cylinder, 7-pin (restricted)",
      "L": "Less cylinder (no cylinder furnished)",
      "C": "Concealed mortise cylinder, 6-pin/keyed 5-pin",
      "C6": "Concealed mortise cylinder, 6-pin",
      "W": "Less concealed mortise cylinder",
      "R": "FSIC, 6-pin full-size interchangeable core",
      "T": "FSIC — Construction Core (refundable)",
      "M": "Everest SL — FSIC, 7-pin",
      "J": "Less FSIC (housing only, no core)",
      "F": "FSIC, 6-pin, less Schlage logo",
      "G": "SFIC, 7-pin small-format interchangeable core",
      "H": "Refundable Construction Core, SFIC",
      "BDC": "Disposable Construction Core, SFIC",
      "B": "Less SFIC (housing only, no core)"
    },
    // Numeric lever design codes + named designs, per pages 12-13
    levers: {
      "01": "Standard Collection lever 01 (Tubular style)",
      "02": "Standard Collection lever 02",
      "03": "Standard Collection lever 03 (Tubular style)",
      "05": "Standard Collection lever 05",
      "06": "Rhodes lever design",
      "07": "Athens lever design",
      "12": "Sparta lever design (door handing required)",
      "17": "Standard Collection lever 17 (Sparta/Neptune family)",
      "18": "Standard Collection lever 18",
      "ACC": "Accent lever (handed)",
      "AST": "Asti lever (handed) — pairs with optional AVA rose (specify ASTAVA)",
      "LAT": "Latitude lever",
      "LON": "Longitude lever",
      "MER": "Merano lever — pairs with optional MER rose (specify MERMER)",
      "OME": "Omega knob",
      "41": "Standard Collection knob 41",
      "42": "Standard Collection knob 42",
      "M51": "M Collection lever M51",
      "M52": "M Collection lever M52 (Broadway)",
      "M53": "M Collection lever M53",
      "M54": "M Collection lever M54",
      "M55": "M Collection lever M55",
      "M56": "M Collection lever M56",
      "M57": "M Collection lever M57",
      "M61": "M Collection lever M61 (handed)",
      "M62": "M Collection lever M62 (handed)",
      "M63": "M Collection lever M63 (handed)",
      "M81": "M Collection lever M81 (Boardwalk)",
      "M82": "M Collection lever M82",
      "M83": "M Collection lever M83",
      "M84": "M Collection lever M84",
      "M85": "M Collection lever M85",
      "ME1": "M Collection ergonomic lever ME1 (Gensler-designed)",
      "ME2": "M Collection ergonomic lever ME2 (Gensler-designed)",
      "ME3": "M Collection ergonomic lever ME3 (Gensler-designed)"
    },
    // Suffix appended directly after the lever design code.
    leverTrimSuffix: {
      "L": "L (full-face) escutcheon — cold-forged brass/stainless steel, 7-15/16\" x 1-3/4\"",
      "N": "N (full-face) escutcheon — heavy-wrought reinforced brass/stainless steel, 7-7/8\" x 2-1/2\"",
      "A": "A rose — 2-1/8\" diameter, all L Series finishes",
      "B": "B rose — 2-9/16\" diameter, all L Series finishes",
      "C": "C rose — 2-5/8\" diameter, limited finish set (605/606/609/619/622/625/626/629/630/643e)"
    },
    tactilePrefix: "Tactile warning lever (milled or knurled surface for visually-impaired warning) — applied to the outside lever",
    concealedEscutcheonNote: "L-concealed escutcheon requires BOTH a ‘C’ suffix on the function code and an ‘L’ suffix after the lever design code"
  },

  ND: {
    key: "ND",
    label: "ND Series Cylindrical Lock",
    prefixes: {
      "NDEBSi": "ND Series wireless lock, mobile-enabled with HID® credential support",
      "NDEB": "ND Series wireless lock, mobile-enabled",
      "ND": "ND Series standard cylindrical lock"
    },
    functionSuffixes: {
      "EL": "Electrified locked",
      "EU": "Electrified unlocked"
    },
    functions: {
      "10": "Passage latch (ANSI F75)",
      "12": "Exit lock (ANSI F89)",
      "25": "Exit lock with exterior blank plate (non-keyed)",
      "30": "Patio lock (ANSI F77)",
      "40": "Bath/bedroom privacy lock (ANSI F76)",
      "44": "Hospital privacy lock",
      "45": "Time-out lock with Vandlgard®",
      "170": "Single dummy trim",
      "172": "Double dummy trim",
      "50": "Entrance/office lock (ANSI F82)",
      "52": "Keyed privacy lock",
      "53": "Entrance lock (ANSI F109)",
      "55": "Entrance lock with automatic unlocking",
      "60": "Vestibule lock (ANSI F88; with XN12-001: interior unlocking only)",
      "66": "Store lock (ANSI F91)",
      "70": "Classroom lock, exterior lockdown only (ANSI F84)",
      "72": "Communicating lock (ANSI F80, requires XN12-002; Vandlgard variant with XN12-003)",
      "73": "Corridor lock (ANSI F90)",
      "78": "Classroom security lock, 180° lockdown (ANSI F110)",
      "80": "Storeroom lock (ANSI F86)",
      "81": "Accessible storeroom lock (ANSI F86)",
      "82": "Institution lock (ANSI F87)",
      "85": "Faculty restroom lock (ANSI F93)",
      "91": "Vandlgard® entrance/office lock (ANSI F82)",
      "92": "Vandlgard® entrance lock (ANSI F109)",
      "93": "Vandlgard® vestibule lock (ANSI F88)",
      "94": "Vandlgard® classroom lock, exterior lockdown (ANSI F84)",
      "96": "Vandlgard® storeroom lock (ANSI F86)",
      "97": "Vandlgard® corridor lock (ANSI F90)",
      "98": "Vandlgard® classroom security lock (ANSI F110)"
    },
    cylinderTypes: {
      "P6": "6-pin conventional cylinder (default)",
      "P": "6-pin conventional cylinder, keyed 5-pin",
      "Z": "Everest SL cylinder, 7-pin (restricted)",
      "L": "Less cylinder (no cylinder furnished)",
      "C": "Less double cylinder",
      "R": "FSIC, 6-pin full-size interchangeable core (default for FSIC)",
      "T": "FSIC — Construction Core",
      "M": "Everest SL — FSIC, 7-pin",
      "J": "Less Schlage FSIC (housing only)",
      "G": "SFIC, 7-pin small-format interchangeable core",
      "H": "Refundable Construction Core, SFIC",
      "BDC": "Disposable Construction Core, SFIC",
      "B": "Less SFIC (housing only, no core)",
      "L-CO": "Less cylinder, fit Corbin Russwin KIL",
      "L-SA": "Less cylinder, fit Sargent KIL",
      "J-CO6": "Less core, fit Corbin Russwin 6-pin LFIC",
      "J-CO7": "Less core, fit Corbin Russwin 7-pin LFIC",
      "J-SA": "Less core, fit Sargent 6-pin LFIC",
      "J-ME": "Less core, fit Medeco-compatible LFIC",
      "J-YA": "Less core, fit Yale-compatible LFIC"
    },
    levers: {
      "ATH": "Athens lever design",
      "BRK": "Boardwalk lever design",
      "BRW": "Broadway lever design",
      "LAT": "Latitude lever design",
      "LON": "Longitude lever design",
      "OME": "Omega lever design",
      "RHO": "Rhodes lever design",
      "SPA": "Sparta lever design",
      "TLR": "Tubular lever design"
    },
    // Tactile-warning codes are irregular abbreviations, not "8"+full code.
    tactileCodes: {
      "8AT": "ATH", "8BK": "BRK", "8BW": "BRW", "8LT": "LAT",
      "8LN": "LON", "8RO": "RHO", "8SP": "SPA", "8TR": "TLR"
    },
    tactilePrefix: "Tactile warning lever (8-prefix: 8AT/8BK/8BW/8LT/8LN/8RO/8SP/8TR) — milled/knurled surface, outside lever only"
  },

  ALX: {
    key: "ALX",
    label: "ALX Series Grade 2 Modular Cylindrical Lock",
    prefixes: {
      "ALXV": "ALX Series with Vandlgard® — field-selectable, outside lever spins freely when locked",
      "ALX": "ALX Series standard Grade 2 modular cylindrical lock"
    },
    functions: {
      "10": "Passage latch (ANSI F75)",
      "25": "Exit lock with exterior blank plate",
      "40": "Bath/bedroom privacy lock (ANSI F76)",
      "44": "Hospital privacy lock",
      "170": "Single dummy trim",
      "172": "Double dummy trim",
      "50": "Entrance/office lock (ANSI F82)",
      "53": "Entrance lock (ANSI F109)",
      "70": "Classroom lock, exterior lockdown only (ANSI F84)",
      "80": "Storeroom lock (ANSI F86)"
    },
    cylinderTypes: {
      "P6": "6-pin conventional cylinder (default)",
      "P": "6-pin cylinder, keyed different",
      "Z": "Everest SL cylinder, 7-pin",
      "L": "Less Schlage cylinder",
      "L-CO": "Less cylinder, fit Corbin Russwin KIL",
      "L-SA": "Less cylinder, fit Sargent KIL",
      "R": "FSIC, 6-pin interchangeable core",
      "M": "SL-FSIC, 7-pin (A2 pinning)",
      "T": "FSIC — Refundable Construction Core",
      "J": "Less Schlage FSIC",
      "J-CO6": "Less core, fit Corbin Russwin 6-pin LFIC",
      "J-CO7": "Less core, fit Corbin Russwin 7-pin LFIC",
      "J-SA": "Less core, fit Sargent 6-pin LFIC",
      "G": "SFIC, 7-pin interchangeable core",
      "H": "Refundable Construction Core, SFIC",
      "BDC": "Disposable Construction Core, SFIC",
      "B": "Less SFIC"
    },
    levers: {
      "ATH": "Athens lever design",
      "BRK": "Boardwalk lever design",
      "BRW": "Broadway lever design",
      "LAT": "Latitude lever design",
      "LON": "Longitude lever design",
      "OME": "Omega lever design (not for kit orders)",
      "RHO": "Rhodes lever design",
      "SAT": "Saturn lever design",
      "SPA": "Sparta lever design",
      "TLR": "Tubular lever design"
    },
    tactileCodes: {
      "8AT": "ATH", "8BK": "BRK", "8BW": "BRW", "8LT": "LAT",
      "8LN": "LON", "8RO": "RHO", "8SP": "SPA", "8TR": "TLR"
    },
    tactilePrefix: "Tactile warning lever (8-prefix: 8AT/8BK/8BW/8LT/8LN/8RO/8SP/8TR) — outside lever only",
    note: "ALX is non-handed — the modular chassis configures for any handing in the field; no handing code needed in the order string."
  },

  CO100: {
    key: "CO100",
    label: "CO-100 Standalone Electronic Lock",
    prefixes: {
      "CO-100": "CO-100 standalone electronic lock series"
    },
    chassis: {
      "CY": "Cylindrical chassis (standard)",
      "MS": "Mortise chassis",
      "MD": "Mortise deadbolt chassis",
      "993R": "Exit trim, Rim/CVC/CVR device",
      "993S": "Exit trim, SVR device",
      "993M": "Exit trim, mortise device",
      "993DT": "Exit trim, dummy"
    },
    functions: {
      "40": "Privacy",
      "50": "Office/classroom",
      "70": "Storeroom (full outdoor-rated, ANSI/BHMA A156.25)"
    },
    reader: {
      "KP": "Keypad reader (standard — only reader option)"
    },
    levers: {
      "ATH": "Athens lever design",
      "BRK": "Boardwalk lever design",
      "BRW": "Broadway lever design",
      "LAT": "Latitude lever design",
      "LON": "Longitude lever design",
      "RHO": "Rhodes lever design",
      "SPA": "Sparta lever design",
      "TLR": "Tubular lever design"
    },
    tactileCodes: {
      "8AT": "ATH", "8BK": "BRK", "8BW": "BRW", "8LT": "LAT",
      "8LN": "LON", "8RO": "RHO", "8SP": "SPA", "8TR": "TLR"
    },
    cylinderTypes: {
      "P6": "Schlage 6-pin conventional key-in-lever cylinder (standard)"
    },
    fieldTemplate: [
      "chassis", "function", "reader", "lever", "finish", "cylinderType",
      "keyway", "handing", "latch", "strike", "doorThickness"
    ],
    knownMultiPart: {
      "13-247": "Cylindrical deadlatch, 2-3/4\" backset, square corner, 1-1/8\" x 2-1/4\" (standard)",
      "09-663": "Mortise armor front, 1-1/4\" wide, square corner (standard)",
      "10-025": "Cylindrical strike, ANSI, no box, 1-1/4\" x 4-7/8\", 1-3/16\" lip (standard)",
      "10-072": "Mortise strike, 1-1/4\" x 4-7/8\", square corner box, 1-3/16\" lip (standard)"
    }
  }
};

// Exact-match literal parts/options that apply across all series (checked
// before falling back to pattern-based classification).
const SHARED_LITERALS = Object.assign({}, COMMON.finishes, COMMON.handing,
  COMMON.indicators, COMMON.keyingSymbols, COMMON.parts);
