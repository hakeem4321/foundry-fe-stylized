/**
 * Centralized keyword configuration for the FE2 system.
 * Single source of truth for all keyword definitions, categories, and item type applicability.
 */

/* -------------------------------------------- */
/*  Keyword Categories                          */
/* -------------------------------------------- */

export const KEYWORD_CATEGORIES = {
  narrative: "narrative",
  itemProperty: "itemProperty",
  rollModifier: "rollModifier",
  munition: "munition",
  complex: "complex"
};

/* -------------------------------------------- */
/*  Keyword Definitions                         */
/* -------------------------------------------- */

/**
 * All keyword definitions. Each has:
 * - id: unique lowercase key (matches old template.json keys)
 * - label: i18n key for the display name
 * - description: i18n key for the tooltip/description
 * - params: array of parameter definitions [{key, label}]
 * - itemTypes: array of item types this keyword applies to
 * - category: one of KEYWORD_CATEGORIES values
 */
export const KEYWORDS = Object.freeze([
  // ── Item Property Keywords ──────────────────────────────
  {
    id: "small", label: "FE2.Keywords.Small.Label", description: "FE2.Keywords.Small.Desc",
    params: [], itemTypes: ["weapon", "utility", "equipment", "outfit"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "large", label: "FE2.Keywords.Large.Label", description: "FE2.Keywords.Large.Desc",
    params: [], itemTypes: ["weapon", "utility", "equipment", "outfit"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "innate", label: "FE2.Keywords.Innate.Label", description: "FE2.Keywords.Innate.Desc",
    params: [], itemTypes: ["weapon", "utility", "equipment", "outfit"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "1handed", label: "FE2.Keywords.1Handed.Label", description: "FE2.Keywords.1Handed.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "sidearm", label: "FE2.Keywords.Sidearm.Label", description: "FE2.Keywords.Sidearm.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "trinket", label: "FE2.Keywords.Trinket.Label", description: "FE2.Keywords.Trinket.Desc",
    params: [], itemTypes: ["utility", "equipment"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "gauntlet", label: "FE2.Keywords.Gauntlet.Label", description: "FE2.Keywords.Gauntlet.Desc",
    params: [], itemTypes: ["weapon", "outfit"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "slotsmod", label: "FE2.Keywords.SlotsMod.Label", description: "FE2.Keywords.SlotsMod.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "outfit", "utility", "equipment"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "handsmod", label: "FE2.Keywords.HandsMod.Label", description: "FE2.Keywords.HandsMod.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "outfit", "utility", "equipment"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "drawmod", label: "FE2.Keywords.DrawMod.Label", description: "FE2.Keywords.DrawMod.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.itemProperty
  },
  {
    id: "reloadmod", label: "FE2.Keywords.ReloadMod.Label", description: "FE2.Keywords.ReloadMod.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.itemProperty
  },

  // ── Roll Modifier Keywords ──────────────────────────────
  {
    id: "stronghit", label: "FE2.Keywords.StrongHit.Label", description: "FE2.Keywords.StrongHit.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Min" }, { key: "Y", label: "FE2.Keywords.Params.Max" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "splash", label: "FE2.Keywords.Splash.Label", description: "FE2.Keywords.Splash.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "pen", label: "FE2.Keywords.Pen.Label", description: "FE2.Keywords.Pen.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "lockon", label: "FE2.Keywords.LockOn.Label", description: "FE2.Keywords.LockOn.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "attribute1d3", label: "FE2.Keywords.Attribute1d3.Label", description: "FE2.Keywords.Attribute1d3.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "slow", label: "FE2.Keywords.Slow.Label", description: "FE2.Keywords.Slow.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "jam", label: "FE2.Keywords.Jam.Label", description: "FE2.Keywords.Jam.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "blunt", label: "FE2.Keywords.Blunt.Label", description: "FE2.Keywords.Blunt.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "burn", label: "FE2.Keywords.Burn.Label", description: "FE2.Keywords.Burn.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "stealth", label: "FE2.Keywords.Stealth.Label", description: "FE2.Keywords.Stealth.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "cover", label: "FE2.Keywords.Cover.Label", description: "FE2.Keywords.Cover.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "maxrange", label: "FE2.Keywords.MaxRange.Label", description: "FE2.Keywords.MaxRange.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "munitionboost", label: "FE2.Keywords.MunitionBoost.Label", description: "FE2.Keywords.MunitionBoost.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "critloc", label: "FE2.Keywords.CritLoc.Label", description: "FE2.Keywords.CritLoc.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "pierce", label: "FE2.Keywords.Pierce.Label", description: "FE2.Keywords.Pierce.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "attributedmg", label: "FE2.Keywords.AttributeDmg.Label", description: "FE2.Keywords.AttributeDmg.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "specialistbonus", label: "FE2.Keywords.SpecialistBonus.Label", description: "FE2.Keywords.SpecialistBonus.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "toolbox", label: "FE2.Keywords.Toolbox.Label", description: "FE2.Keywords.Toolbox.Desc",
    params: [], itemTypes: ["weapon", "utility"],
    category: KEYWORD_CATEGORIES.rollModifier
  },
  {
    id: "visibility", label: "FE2.Keywords.Visibility.Label", description: "FE2.Keywords.Visibility.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.rollModifier
  },

  // ── Narrative Keywords ──────────────────────────────────
  {
    id: "energy", label: "FE2.Keywords.Energy.Label", description: "FE2.Keywords.Energy.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "biotech", label: "FE2.Keywords.BioTech.Label", description: "FE2.Keywords.BioTech.Desc",
    params: [], itemTypes: ["weapon", "outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "lowtech", label: "FE2.Keywords.LowTech.Label", description: "FE2.Keywords.LowTech.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "natural", label: "FE2.Keywords.Natural.Label", description: "FE2.Keywords.Natural.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "electrogravity", label: "FE2.Keywords.ElectroGravity.Label", description: "FE2.Keywords.ElectroGravity.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "robot", label: "FE2.Keywords.Robot.Label", description: "FE2.Keywords.Robot.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "worksinliquid", label: "FE2.Keywords.WorksInLiquid.Label", description: "FE2.Keywords.WorksInLiquid.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "notinthevoid", label: "FE2.Keywords.NotInTheVoid.Label", description: "FE2.Keywords.NotInTheVoid.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "optional", label: "FE2.Keywords.Optional.Label", description: "FE2.Keywords.Optional.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "only", label: "FE2.Keywords.Only.Label", description: "FE2.Keywords.Only.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "requires", label: "FE2.Keywords.Requires.Label", description: "FE2.Keywords.Requires.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "lose", label: "FE2.Keywords.Lose.Label", description: "FE2.Keywords.Lose.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "prototype", label: "FE2.Keywords.Prototype.Label", description: "FE2.Keywords.Prototype.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "novarormod", label: "FE2.Keywords.NoVarOrMod.Label", description: "FE2.Keywords.NoVarOrMod.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "flight", label: "FE2.Keywords.Flight.Label", description: "FE2.Keywords.Flight.Desc",
    params: [], itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "environmentalgear", label: "FE2.Keywords.EnvironmentalGear.Label", description: "FE2.Keywords.EnvironmentalGear.Desc",
    params: [], itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "communicationsshort", label: "FE2.Keywords.CommunicationsShort.Label", description: "FE2.Keywords.CommunicationsShort.Desc",
    params: [], itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "communicationslong", label: "FE2.Keywords.CommunicationsLong.Label", description: "FE2.Keywords.CommunicationsLong.Desc",
    params: [], itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "ally", label: "FE2.Keywords.Ally.Label", description: "FE2.Keywords.Ally.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "arc", label: "FE2.Keywords.Arc.Label", description: "FE2.Keywords.Arc.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "area", label: "FE2.Keywords.Area.Label", description: "FE2.Keywords.Area.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "hostileenvironment", label: "FE2.Keywords.HostileEnvironment.Label", description: "FE2.Keywords.HostileEnvironment.Desc",
    params: [], itemTypes: ["weapon", "outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "aura", label: "FE2.Keywords.Aura.Label", description: "FE2.Keywords.Aura.Desc",
    params: [], itemTypes: ["weapon", "outfit"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "disruptor", label: "FE2.Keywords.Disruptor.Label", description: "FE2.Keywords.Disruptor.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.narrative
  },
  {
    id: "mounted", label: "FE2.Keywords.Mounted.Label", description: "FE2.Keywords.Mounted.Desc",
    params: [], itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.narrative
  },

  // ── Complex Keywords ────────────────────────────────────
  {
    id: "costsparetp", label: "FE2.Keywords.CostSpareTP.Label", description: "FE2.Keywords.CostSpareTP.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "outfit", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "for1sessiononly", label: "FE2.Keywords.For1SessionOnly.Label", description: "FE2.Keywords.For1SessionOnly.Desc",
    params: [], itemTypes: ["weapon", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "modrolls", label: "FE2.Keywords.ModRolls.Label", description: "FE2.Keywords.ModRolls.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon", "outfit", "spacecraftweapon"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "setup", label: "FE2.Keywords.Setup.Label", description: "FE2.Keywords.Setup.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["weapon"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "setuppulldown", label: "FE2.Keywords.SetUpPullDown.Label", description: "FE2.Keywords.SetUpPullDown.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "arcoffire", label: "FE2.Keywords.ArcOfFire.Label", description: "FE2.Keywords.ArcOfFire.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["spacecraftweapon"],
    category: KEYWORD_CATEGORIES.complex
  },
  {
    id: "shield", label: "FE2.Keywords.Shield.Label", description: "FE2.Keywords.Shield.Desc",
    params: [{ key: "X", label: "FE2.Keywords.Params.Value" }],
    itemTypes: ["outfit"],
    category: KEYWORD_CATEGORIES.complex
  }
]);

/* -------------------------------------------- */
/*  Lookup Helpers                              */
/* -------------------------------------------- */

/** Index by ID for fast lookup */
const _byId = new Map(KEYWORDS.map(kw => [kw.id, kw]));

/**
 * Get all keywords applicable to a given item type.
 * @param {string} itemType - The item type (e.g., "weapon", "outfit")
 * @returns {object[]} Filtered keyword definitions
 */
export function getKeywordsForType(itemType) {
  return KEYWORDS.filter(kw => kw.itemTypes.includes(itemType));
}

/**
 * Get a keyword definition by its ID.
 * @param {string} id - The keyword ID
 * @returns {object|undefined} The keyword definition, or undefined
 */
export function getKeywordById(id) {
  return _byId.get(id);
}

/* -------------------------------------------- */
/*  Effective Stats Computation                 */
/* -------------------------------------------- */

/**
 * Compute effective slots/hands/draw/reload for an item after applying keyword modifiers.
 * @param {object} itemData - The item document (needs .system.slots, .system.hands, etc.)
 * @returns {{slots: number, hands: number, draw: number, reload: number}}
 */
export function computeEffectiveItemStats(itemData) {
  let slots = Number(itemData.system.slots ?? 2);
  let hands = Number(itemData.system.hands ?? 0);
  let draw = Number(itemData.system.draw ?? 1);
  let reload = Number(itemData.system.reload ?? 2);

  const keywords = Array.isArray(itemData.system.keywords) ? itemData.system.keywords : [];
  const keywordIds = new Set(keywords.map(k => k.id));

  if (keywordIds.has("small")) slots = 1;
  if (keywordIds.has("large")) slots = 3;
  if (keywordIds.has("innate")) {
    slots = Math.max(0, slots - 2);
    hands = Math.max(0, hands - 2);
  }
  if (keywordIds.has("1handed")) hands = 1;

  // Additive modifiers
  for (const kw of keywords) {
    const val = Number(kw.X) || 0;
    if (kw.id === "slotsmod") slots += val;
    else if (kw.id === "handsmod") hands += val;
    else if (kw.id === "drawmod") draw += val;
    else if (kw.id === "reloadmod") reload += val;
  }

  return { slots: Math.max(0, slots), hands: Math.max(0, hands), draw: Math.max(0, draw), reload: Math.max(0, reload) };
}
