// Full "Mechanical Lock Functions" / "Wired Electrified Lock Functions" /
// "LM9200 & LM9300 Multi-Point Lock Functions" descriptions, transcribed
// verbatim (bullets + notes) from Schlage_L_Series_Catalog_102899.pdf.
// Keyed by function digit code, matching SERIES.L.functions.
const L_FUNCTION_DETAILS = {
  "460": {
    title: "Cylinder x thumbturn small case mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "462": {
    title: "Double cylinder small case mortise deadbolt",
    bullets: [
      "Key cylinder both sides, no levers (or knobs); deadbolt only",
      "Deadbolt thrown or retracted by key from either side"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "463": {
    title: "Cylinder x cylinder thumbturn small case mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; cylinder thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by key outside",
      "Rotating inside thumbturn retracts deadbolt but cannot project it"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "464": {
    title: "Cylinder only small case mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; no interior trim; deadbolt only",
      "Deadbolt thrown or retracted by key"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "480": {
    title: "Thumbturn only small case mortise deadbolt",
    bullets: [
      "No outside trim; thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by rotating inside thumbturn"
    ],
    notes: [
      "Note: When ordered with indicator, the indicator is applied to the thumbturn side.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "496": {
    title: "Cylinder x thumbturn small case mortise deadbolt with chevron indicator",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn, when thrown-indicator message changes from blank to “OCCUPIED”"
    ],
    notes: []
  },
  "0170": {
    title: "Half dummy trim",
    bullets: [
      "Lever (or knob) only-one side; no armor front or mortise case",
      "Lever always fixed"
    ],
    notes: [
      "Note: Do not use on hollow core wood doors. All metal door applications require reinforcement.",
      "Ordering: Specify door handing. Additionally, when ordering with escutcheon trim, an inside escutcheon with through bolts will be provided."
    ]
  },
  "0172": {
    title: "Full dummy trim",
    bullets: [
      "Levers (or knobs) only-both sides; no armor front or mortise case",
      "Both levers always fixed"
    ],
    notes: [
      "Note: All metal door applications require reinforcement."
    ]
  },
  "9010": {
    title: "Passage latch",
    bullets: [
      "Levers (or knobs) only-both sides; latchbolt only",
      "Latchbolt retracted by lever (or knob) from either side at all times",
      "Inside lever always free for immediate egress"
    ],
    notes: []
  },
  "9025": {
    title: "Exit or communicating lock",
    bullets: [
      "No outside trim; lever (or knob) only-inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from inside only",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "When ordering, specify door handing."
    ]
  },
  "9026": {
    title: "Exit lock with cylinder",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever from inside",
      "Key outside retracts latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Available in rose or L escutcheon trim only.",
      "When ordering, specify door handing."
    ]
  },
  "9040": {
    title: "Bath/bedroom privacy lock",
    bullets: [
      "Emergency thumbturn access outside; thumbturn inside; latchbolt only",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by rotating inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "To unlock from outside, remove access hole cover, insert emergency thumbturn (furnished) and rotate",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts latchbolt and unlocks outside lever; closing door also unlocks preventing lock-out",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Hospital latch trim not available with Vandlgard option."
    ]
  },
  "9044": {
    title: "Privacy with coin turn outside",
    bullets: [
      "Coin turn outside; thumbturn inside; latchbolt only",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by rotating outside coin turn or inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Rotating outside coin turn unlocks outside lever",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts latchbolt and unlocks outside lever; closing door also unlocks preventing lock-out",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9050": {
    title: "Entrance/office lock",
    bullets: [
      "Key cylinder outside; thumbturn inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key outside or by turning inside thumbturn; Vandlgard® option allows both levers to rotate freely down while locked",
      "Key outside unlocks outside lever and retracts latchbolt",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts latchbolt but does not unlock",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Caution: Egress without fully rotating the thumbturn to vertical position can result in lock-out situations.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9056": {
    title: "Entrance/office lock with automatic unlocking",
    bullets: [
      "Key cylinder outside; thumbturn inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key outside or by turning inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside unlocks outside lever and retracts latchbolt; XL13-439 option allows key to retract latchbolt overriding thumbturn if being held in locked position",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts latchbolt and unlocks outside lever; closing door also unlocks preventing lock-out",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9060": {
    title: "Apartment entrance lock",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key inside; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts latchbolt but cannot lock or unlock outside lever",
      "Rotating inside lever retracts latchbolt; key inside retracts latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key inside.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9066": {
    title: "Store lock",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Both levers are made inoperative by key from either side",
      "Key use on either side unlocks both levers and retracts latchbolt"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9070": {
    title: "Classroom lock, exterior lockdown only",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever from either side",
      "Outside lever is made inoperative by key outside; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside unlocks outside lever and retracts latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9071": {
    title: "Classroom security lock, interior/exterior lockdown",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key from either side; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Rotating inside lever retracts latchbolt; key on either side unlocks outside lever and retracts latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9076": {
    title: "Classroom holdback lock, exterior lockdown only",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever from either side",
      "Outside lever is made inoperative by key outside; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside unlocks outside lever and retracts latchbolt",
      "Rotate inside lever while turning key 360° to activate retracted latch holdback feature; to deactivate, reverse key rotation 360°",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "Note: Locks with holdback feature are not UL listed. Installation should be in accordance with existing codes only.",
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9077": {
    title: "Classroom security holdback lock, interior/exterior lockdown",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key from either side; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts latchbolt but cannot unlock outside lever",
      "Rotating inside lever retracts latchbolt; key inside retracts latchbolt and unlocks outside lever",
      "Rotate inside lever while turning key 360° to activate retracted latch holdback feature; to deactivate, reverse key rotation 360°",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key inside.",
      "Note: Locks with holdback feature are not UL listed. Installation should be in accordance with existing codes only.",
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9080": {
    title: "Storeroom lock",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Outside lever always fixed; latchbolt retracted by inside lever; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9081": {
    title: "Accessible storeoom lock",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever from either side",
      "Outside lever is made inoperative by key outside; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside inserted and turned 280° unlocks allowing outside lever to retract latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "When ordering, specify door handing."
    ]
  },
  "9082": {
    title: "Institution lock",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Both levers (or knobs) always fixed; Vandlgard® option allows both levers to rotate freely down while locked",
      "Key on either side retracts latchbolt"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9090": {
    title: "Electrically locking/unlocking outside lever, no cylinder",
    bullets: [
      "Levers (or knobs) only both sides; latchbolt and deadlocking auxiliary latch",
      "Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows outside lever to rotate freely down while locked",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode outside lever is locked",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU. Keyed Non-Deadbolt"
    ]
  },
  "9091": {
    title: "Electrically locking/unlocking both levers, no cylinder",
    bullets: [
      "Levers (or knobs) only both sides; latchbolt and deadlocking auxiliary latch",
      "Powered state: both levers continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows both levers to rotate freely down while locked",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU. Electrified Functions"
    ]
  },
  "9092": {
    title: "Electrically locking/unlocking outside lever, outside cylinder",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts latchbolt but cannot change the normal locked or unlocked state of outside lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode outside lever is locked",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9093": {
    title: "Electrically locking/unlocking both levers, outside cylinder",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Powered state: both levers continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows both levers to rotate freely down while locked",
      "Key outside retracts latchbolt but cannot change the normal locked or unlocked state of either lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9095": {
    title: "Electrically locking/unlocking both levers, double cylinder",
    bullets: [
      "Key cylinder both sides; latchbolt and deadlocking auxiliary latch",
      "Powered state: both levers (or knobs) continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows both levers to rotate freely down while locked",
      "Key on either side retracts latchbolt but cannot change the normal locked or unlocked state of levers",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9110": {
    title: "Full dummy trim with active levers",
    bullets: [
      "Levers (or knobs) only-both sides; blank armor front without latchbolt",
      "Both levers always active"
    ],
    notes: [
      "Note: Includes blank armor front and lock case. May be ordered with optional XL11-743 armor front with cutout to receive deadbolt."
    ]
  },
  "9175": {
    title: "Half dummy trim with lock case",
    bullets: [
      "Lever (or knob) only-one side; blank armor front without latchbolt",
      "Lever always fixed"
    ],
    notes: [
      "Note: Includes blank armor front and lock case. Door handing must be specified. May be ordered with optional XL11-743 armor front with cutout to receive deadbolt. Single Cylinder Non-Deadbolt"
    ]
  },
  "9176": {
    title: "Full dummy trim with lock case",
    bullets: [
      "Levers (or knobs) only-both sides; blank armor front without latchbolt",
      "Both levers always fixed"
    ],
    notes: [
      "Note: Includes blank armor front and lock case. May be ordered with optional XL11-743 armor front with cutout to receive deadbolt.",
      "Ordering: In a double-door application where dummy is used as the strike, order 10-091 armored front strike separately. Functions"
    ]
  },
  "9210": {
    title: "2-point passage latch",
    bullets: [
      "Levers only-both sides; 2-point latch",
      "Latchbolts retracted by lever from either side at all times",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "When ordering, specify door handing."
    ]
  },
  "9225": {
    title: "2-point exit lock",
    bullets: [
      "No outside trim; lever only-inside; 2-point latch",
      "Latchbolts retracted by lever from inside only",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Available in rose trim only.",
      "When ordering, specify door handing."
    ]
  },
  "9250": {
    title: "2-point entrance/office lock",
    bullets: [
      "Key cylinder outside; thumbturn inside; 2-point latch",
      "Latchbolts retracted by lever from either side",
      "Outside lever is made inoperative by key outside or by turning inside thumbturn",
      "Key outside unlocks and enables outside lever to retract both latches",
      "Rotating inside lever retracts latchbolts; outside lever unlocked when thumbturn is returned to vertical position",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Caution: Outside lever remains inoperative until thumbturn is returned to vertical or unlocked by key.",
      "When ordering, specify door handing."
    ]
  },
  "9256": {
    title: "2-point entrance/office lock with automatic unlocking",
    bullets: [
      "Key cylinder outside; thumbturn inside; 2-point latch",
      "Latchbolts retracted by lever from either side",
      "Outside lever is made inoperative by key outside or by turning inside thumbturn",
      "Key outside unlocks and enables outside lever to retract both latches",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts latchbolts and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "When ordering, specify door handing."
    ]
  },
  "9270": {
    title: "2-point classroom lock, exterior lockdown only",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; 2-point latch",
      "Latchbolts retracted by lever from either side",
      "Outside lever is made inoperative by key outside",
      "Key outside unlocks and enables outside lever to retract both latches",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "When ordering, specify door handing."
    ]
  },
  "9271": {
    title: "2-point classroom security lock, interior/exterior lockdown",
    bullets: [
      "Key cylinder both sides; 2-point latch",
      "Latchbolts retracted by lever from either side",
      "Outside lever is made inoperative by key from either side",
      "Key on either side unlocks and enables outside lever to retract both latches",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "When ordering, specify door handing."
    ]
  },
  "9280": {
    title: "2-point storeroom lock",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; 2-point latch",
      "Outside lever normally locked; latchbolts retracted by inside lever",
      "Key outside inserted and turned 280° unlocks, allowing outside lever to retract latches; removal of key returns door to locked state",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "When ordering, specify door handing."
    ]
  },
  "9290": {
    title: "Electrically locking/unlocking outside lever, no cylinder 2-point lock",
    bullets: [
      "Levers only-both sides; 2-point latch",
      "Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode)",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode outside lever is locked",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9291": {
    title: "Electrically locking/unlocking both levers, no cylinder 2-point lock",
    bullets: [
      "Levers only-both sides; 2-point latch",
      "Powered state: both levers continuously locked (EL mode) or unlocked (EU mode)",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9292": {
    title: "Electrically locking/unlocking outside lever, outside cylinder 2-point lock",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; 2-point latch",
      "Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode)",
      "When locked, key outside enables outside lever to retract both latches but cannot change the normal locked or unlocked state of outside lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode outside lever is locked",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9293": {
    title: "Electrically locking/unlocking both levers, outside cylinder 2-point lock",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; 2-point latch",
      "Powered state: both levers continuously locked (EL mode) or unlocked (EU mode)",
      "When locked, key outside enables outside lever to retract both latches but cannot change the normal locked or unlocked state of outside lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9294": {
    title: "Electrically locking/unlocking outside lever, double cylinder 2-point lock",
    bullets: [
      "Key cylinder both sides; 2-point latch",
      "Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode)",
      "When locked, key on either side enables either lever to retract both latches but cannot change the normal locked or unlocked state of outside lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode outside lever is locked",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9295": {
    title: "Electrically locking/unlocking both levers, double cylinder 2-point lock",
    bullets: [
      "Key cylinder both sides; 2-point latch",
      "Powered state: both levers continuously locked (EL mode) or unlocked (EU mode)",
      "When locked, key on either side enables either lever to retract both latches but cannot change the normal locked or unlocked state of either lever",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolts; in EU mode both levers are locked"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC.",
      "Ordering: Specify door handing. Additionally, case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9310": {
    title: "3-point passage latch",
    bullets: [
      "Levers (or knobs) only-both sides; 3-point latch and deadlocking auxiliary latch",
      "Latchbolts retracted by lever from either side at all times",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9325": {
    title: "3-point exit lock",
    bullets: [
      "No outside trim; lever (or knob) only-inside; 3-point latch and deadlocking auxiliary latch",
      "Latchbolts retracted by lever from inside only",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9350": {
    title: "3-point entrance/office lock",
    bullets: [
      "Key cylinder outside; thumbturn inside; 3-point latch and deadlocking auxiliary latch",
      "Latchbolts retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key outside or by turning inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside unlocks and enables outside lever to retract all three latches",
      "Rotating inside lever retracts latchbolts; outside lever unlocked when thumbturn is returned to vertical position",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Caution: Outside lever remains inoperative until thumbturn is returned to vertical or unlocked by key.",
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9370": {
    title: "3-point classroom lock, exterior lockdown only",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; 3-point latch and deadlocking auxiliary latch",
      "Latchbolts retracted by lever from either side",
      "Outside lever is made inoperative by key outside; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside unlocks and enables outside lever to retract all three latches",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9371": {
    title: "3-point classroom security lock, interior/exterior lockdown",
    bullets: [
      "Key cylinder both sides; 3-point latch and deadlocking auxiliary latch",
      "Latchbolts retracted by lever (or knob) from either side",
      "Outside lever is made inoperative by key either side; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key on either side unlocks and enables outside lever to retract all three latches",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Outside lever remains inoperative until unlocked by key.",
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9380": {
    title: "3-point storeroom lock",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; 3-point latch and deadlocking auxiliary latch",
      "Outside lever normally locked; latchbolts retracted by inside lever; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside inserted and turned 280° unlocks, allowing outside lever to retract latches; removal of key returns door to locked state",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Requires door and rod set sold through Steelcraft.",
      "When ordering, specify door handing."
    ]
  },
  "9412": {
    title: "Exit lock with deadbolt",
    bullets: [
      "Lever (or knob) only-outside; thumbturn inside with lever; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Outside lever (or knob) always fixed; latchbolt retracted by inside lever",
      "Deadbolt thrown or retracted by rotating inside thumbturn",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: []
  },
  "9440": {
    title: "Privacy with deadbolt",
    bullets: [
      "Emergency thumbturn access outside; thumbturn inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by rotating inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "To unlock from outside, remove access hole cover, insert emergency thumbturn (furnished) and rotate",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress Non-Keyed Dummy"
    ],
    notes: []
  },
  "9444": {
    title: "Privacy with deadbolt and coin turn outside",
    bullets: [
      "Coin turn outside; thumbturn inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by rotating inside thumbturn or outside coin turn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Rotating outside coin turn retracts deadbolt and unlocks outside lever",
      "Rotating inside thumbturn unlocks outside lever; turning inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option. Functions"
    ]
  },
  "9453": {
    title: "Entrance/office lock with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by key outside; rotating thumbturn 20° locks outside lever only; rotating thumbturn 90° also throws deadbolt; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts deadbolt and latchbolt, however, outside lever remains locked",
      "Rotating inside lever retracts deadbolt and latchbolt; outside lever unlocked when thumbturn is returned to vertical position",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Caution: Egress without fully rotating the thumbturn to vertical position can result in lock-out situations.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9456": {
    title: "Corridor lock with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by key outside or by inside thumbturn; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts deadbolt and unlocks outside lever; XL13-439 option allows key to retract deadbolt overriding thumbturn if being held in locked position",
      "Rotating inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option.",
      "To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9457": {
    title: "Classroom security lock with deadbolt",
    bullets: [
      "Key cylinder both sides; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by key from either side; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key either side retracts both latchbolt and deadbolt and unlocks outside lever",
      "Rotating inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9458": {
    title: "Classroom security lock with deadbolt and auxiliary latch",
    bullets: [
      "Key cylinder both sides; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by key from either side; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key either side retracts both latchbolt and deadbolt and unlocks outside lever",
      "Rotating inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9460": {
    title: "Cylinder x thumbturn mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "9462": {
    title: "Double cylinder mortise deadbolt",
    bullets: [
      "Key cylinder both sides, no levers (or knobs); deadbolt only",
      "Deadbolt thrown or retracted by key from either side"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "9463": {
    title: "Cylinder x cylinder thumbturn mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; cylinder thumbturn only, no lever inside; deadbolt only",
      "Deadbolt thrown or retracted by key outside",
      "Rotating inside thumbturn retracts deadbolt but cannot project it"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "9464": {
    title: "Cylinder only mortise deadbolt",
    bullets: [
      "Key cylinder only, no lever (or knob) outside; no interior trim; deadbolt only",
      "Deadbolt thrown or retracted by key"
    ],
    notes: [
      "Note: L9000 mortise deadbolts available in L escutcheon or sectional trim only.",
      "Note: L400 small case not available with escutcheon trim."
    ]
  },
  "9465": {
    title: "Closet/storeroom lock",
    bullets: [
      "Key cylinder outside with lever (or knob); lever only-inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever from either side at all times",
      "Deadbolt thrown or retracted by key outside"
    ],
    notes: [
      "Caution: Deadbolt locks with outside key retraction only can result in situations where occupants can be locked in.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9466": {
    title: "Utility room/storeroom lock",
    bullets: [
      "Key cylinder both sides; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Deadbolt thrown or retracted by key from either side"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9473": {
    title: "Dormitory/bedroom lock",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side at all times",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn"
    ],
    notes: [
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option."
    ]
  },
  "9480": {
    title: "Storeroom lock with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Outside lever (or knob) always fixed; latchbolt retracted by inside lever; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn",
      "Key outside retracts deadbolt and latchbolt, however, outside lever remains locked; XL13-439 option allows key to retract deadbolt and latchbolt overriding thumbturn if being held in locked position",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9482": {
    title: "Institution lock with deadbolt",
    bullets: [
      "Key cylinder both sides; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Both levers always fixed; Vandlgard® option allows both levers to rotate freely down while locked",
      "Deadbolt thrown or retracted by key from either side",
      "Key on either side retracts both deadbolt and latchbolt"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only."
    ]
  },
  "9485": {
    title: "Faculty/hotel restroom lock with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Outside lever (or knob) always fixed; latchbolt retracted by inside lever; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Deadbolt thrown or retracted by rotating inside thumbturn",
      "Key outside retracts latchbolt but does not retract deadbolt unless using an emergency key (sold separately)",
      "Optional XL13-439 allows emergency key to retract deadbolt and latchbolt overriding thumbturn if being held in locked position",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Not available in SFIC or Everest SL formats.",
      "Note: Hospital latch and ligature-resistant trims not available with Vandlgard option.",
      "To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9486": {
    title: "Faculty/hotel restroom lock with chevron indicator",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Outside lever (or knob) always fixed; latchbolt retracted by inside lever; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Deadbolt thrown or retracted by rotating inside thumbturn, when thrown-indicator message changes from blank to “DO NOT DISTURB”",
      "Key outside retracts latchbolt but does not retract deadbolt unless using an emergency key (sold separately)",
      "Optional XL13-439 allows emergency key to retract deadbolt and latchbolt overriding thumbturn if being held in locked position",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Not available in SFIC or Everest SL formats. Hospital latch trim not available with Vandlgard option.",
      "To order with key override, specify function and note XL13-439 as a special option. Available with A, B or C roses only; to order chevron indicator with “OCCUPIED” message specify L583-375."
    ]
  },
  "9492": {
    title: "Electrically locking/unlocking outside lever, outside cylinder, inside thumbturn with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Powered state: outside lever (or knob) continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows outside lever to rotate freely down while locked",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn; XL13-439 option allows key to retract deadbolt overriding thumbturn if being held in locked position",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode outside lever is locked; deadbolt projection is independent of electrically locked or unlocked state of outside lever",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC; supplied deadbolt monitor allows option to prevent ingress with card use when deadbolt is thrown.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU. To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9493": {
    title: "Electrically locking/unlocking both levers, outside cylinder, inside thumbturn with deadbolt",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Powered state: both levers (or knobs) continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows both levers to rotate freely down while locked",
      "Deadbolt thrown or retracted by key outside or by inside thumbturn; XL13-439 option allows key to retract deadbolt overriding thumbturn if being held in locked position",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked; deadbolt projection is independent of electrically locked or unlocked state of either lever",
      "When unlocked, rotating inside lever retracts both deadbolt and latchbolt"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC; supplied deadbolt monitor allows option to prevent ingress with card use when deadbolt is thrown.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU. To order with key override, specify function and note XL13-439 as a special option."
    ]
  },
  "9494": {
    title: "Electrically locking/unlocking outside lever, double cylinder with deadbolt",
    bullets: [
      "Key cylinder both sides; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Powered state: outside lever (or knob) continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows outside lever to rotate freely down while locked",
      "Deadbolt thrown or retracted by key from either side",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode outside lever is locked; deadbolt projection is independent of electrically locked or unlocked state of outside lever",
      "Rotating inside lever retracts both deadbolt and latchbolt",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC; supplied deadbolt monitor allows option to prevent ingress with card use when deadbolt is thrown.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9495": {
    title: "Electrically locking/unlocking both levers, double cylinder with deadbolt",
    bullets: [
      "Key cylinder both sides; deadbolt, latchbolt and deadlocking auxiliary latch",
      "Powered state: both levers (or knobs) continuously locked (EL mode) or unlocked (EU mode); Vandlgard® option allows both levers to rotate freely down while locked",
      "Deadbolt thrown or retracted by key from either side",
      "When power is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked; deadbolt projection is independent of electrically locked or unlocked state of either lever",
      "When unlocked, rotating inside lever retracts both deadbolt and latchbolt"
    ],
    notes: [
      "Note: Auto detects 12 or 24V DC; supplied deadbolt monitor allows option to prevent ingress with card use when deadbolt is thrown.",
      "Note: Ligature-resistant trims not available with Vandlgard option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9496": {
    title: "Corridor lock with chevron indicator",
    bullets: [
      "Key cylinder outside; thumbturn inside; deadbolt and latchbolt",
      "Latchbolt retracted by lever (or knob) from either side",
      "Outside lever is made inoperative when deadbolt is thrown by key outside or by inside thumbturn, when thrown-indicator message changes from blank to “OCCUPIED”; Vandlgard® option allows outside lever to rotate freely down while locked",
      "Key outside retracts deadbolt and unlocks outside lever; XL13-439 option allows key to retract deadbolt overriding thumbturn if being held in locked position",
      "Rotating inside lever retracts both deadbolt and latchbolt and unlocks outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: Available in rose trim only.",
      "To order with key override, specify function and note XL13-439 as a special option. Adds chevron style occupancy indicator (09-611) to sectional trim lock with A or B roses only."
    ]
  },
  "9510": {
    title: "Passage latch with motorized latch retraction",
    bullets: [
      "Lever only both sides; latchbolt only",
      "Extended latchbolt is retracted by lever from either side at all times",
      "Powered state: latchbolt is retracted",
      "When power is removed latchbolt extends",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: 24V DC only. Available options include Request to Exit (RX) or Latchbolt Monitor (LX). Motorized Latch Retraction"
    ]
  },
  "9580": {
    title: "Storeroom lock with motorized latch retraction",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Outside lever always fixed; extended latchbolt is retracted by inside lever",
      "Key outside retracts latchbolt",
      "Powered state: latchbolt is retracted",
      "When power is removed latchbolt extends",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: 24V DC only. Available options include Request to Exit (RX) or Latchbolt Monitor (LX). Functions With"
    ]
  },
  "9582": {
    title: "Institution lock with motorized latch retraction",
    bullets: [
      "Key cylinder and lever both sides; latchbolt and deadlocking auxiliary latch",
      "Both levers always fixed",
      "Key on either side retracts latchbolt",
      "Powered state: latchbolt is retracted",
      "When power is removed latchbolt extends"
    ],
    notes: [
      "Caution: Double cylinder locks on any door, in any structure which is used for egress are a life safety hazard in times of emergency and their use is not recommended. Installation should be in accordance with existing codes only.",
      "Note: 24V DC only. Available Latchbolt Monitor (LX) option. Lever Control"
    ]
  },
  "9692": {
    title: "Electrically locking/unlocking outside lever, outside cylinder with motorized latch retraction",
    bullets: [
      "Key cylinder outside with lever; lever only-inside; latchbolt and deadlocking auxiliary latch",
      "Lever control — Powered state: outside lever continuously locked (EL mode) or unlocked (EU mode)",
      "Lever control — When power for lever is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode outside lever is locked",
      "Independent latchbolt control — Powered state: latchbolt is retracted",
      "Independent latchbolt control — When power is removed latchbolt extends",
      "Key outside retracts latchbolt but cannot change the normal locked or unlocked state of outside lever",
      "Inside lever always free for immediate egress"
    ],
    notes: [
      "Note: 24V DC only. Available options include Request to Exit (RX) or Latchbolt Monitor (LX).",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9695": {
    title: "Electrically locking/unlocking both levers double cylinder with motorized latch retraction",
    bullets: [
      "Key cylinder and lever both sides; latchbolt and deadlocking auxiliary latch",
      "Lever control — Powered state: both levers continuously locked (EL mode) or unlocked (EU mode)",
      "Lever control — When power for levers is removed (or power fails): in EL mode either lever will retract latchbolt; in EU mode both levers are locked",
      "Independent latchbolt control — Powered state: latchbolt is retracted",
      "Independent latchbolt control — When power is removed latchbolt extends",
      "Key either side retracts latchbolt but cannot change the normal locked or unlocked state of either lever"
    ],
    notes: [
      "Note: 24V DC only. Available options include Request to Exit (RX) or Latchbolt Monitor (LX).",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
  "9696": {
    title: "Electrically locking/unlocking inside lever double cylinder with motorized latch retraction",
    bullets: [
      "Key cylinder and lever both sides; latchbolt and deadlocking auxiliary latch",
      "Lever control — Powered state: inside lever continuously locked (EL mode) or inside lever unlocked (EU mode); outside lever always fixed",
      "Lever control — When power for lever is removed (or power fails): in EL mode inside lever will retract latchbolt; in EU mode inside lever is locked; outside lever always fixed",
      "Independent latchbolt control — Powered state: latchbolt is retracted",
      "Independent latchbolt control — When power is removed latchbolt extends",
      "Key either side retracts latchbolt but cannot change the normal locked or unlocked state of either lever"
    ],
    notes: [
      "Note: 24V DC only. Available Latchbolt Monitor (LX) option.",
      "Ordering: Case-mounted switch allows field selectable EL/EU setting however, when ordering, please specify EL or EU."
    ]
  },
};