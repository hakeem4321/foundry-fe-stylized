/**
 * Effect target type constants, key parsing, and key building for the FE2 effect system.
 * All 29 target types with fe2.* key prefixes.
 */

/* -------------------------------------------- */
/*  Target Type Constants                       */
/* -------------------------------------------- */

export const EFFECT_TARGET_TYPES = {
  skill: "skill",
  allSkills: "allSkills",
  attribute: "attribute",
  allAttributes: "allAttributes",
  attributeMax: "attributeMax",
  enduranceCurrent: "enduranceCurrent",
  enduranceMax: "enduranceMax",
  equipmentCurrent: "equipmentCurrent",
  equipmentMax: "equipmentMax",
  armour: "armour",
  armourZeroEnd: "armourZeroEnd",
  hitBonus: "hitBonus",
  enduranceDamage: "enduranceDamage",
  influenceMax: "influenceMax",
  resourcesMax: "resourcesMax",
  utilitiesMax: "utilitiesMax",
  gritReroll: "gritReroll",
  combatOrder: "combatOrder",
  defense: "defense",
  movement: "movement",
  acquisition: "acquisition",
  arcane: "arcane",
  untrainedSkill: "untrainedSkill",
  recovery: "recovery",
  shield: "shield",
  shieldRegen: "shieldRegen",
  cargoMax: "cargoMax",
  weaponSlotsMax: "weaponSlotsMax",
  resupplyMax: "resupplyMax"
};

/* -------------------------------------------- */
/*  Category Groupings for UI Dropdowns         */
/* -------------------------------------------- */

export const EFFECT_CATEGORIES = {
  skills: {
    label: "FE2.Effects.Categories.Skills",
    types: [
      { type: EFFECT_TARGET_TYPES.skill, label: "FE2.Effects.TargetTypes.Skill", hasSubtype: true },
      { type: EFFECT_TARGET_TYPES.allSkills, label: "FE2.Effects.TargetTypes.AllSkills" },
      { type: EFFECT_TARGET_TYPES.untrainedSkill, label: "FE2.Effects.TargetTypes.UntrainedSkill" }
    ]
  },
  attributes: {
    label: "FE2.Effects.Categories.Attributes",
    types: [
      { type: EFFECT_TARGET_TYPES.attribute, label: "FE2.Effects.TargetTypes.Attribute", hasSubtype: true },
      { type: EFFECT_TARGET_TYPES.allAttributes, label: "FE2.Effects.TargetTypes.AllAttributes" },
      { type: EFFECT_TARGET_TYPES.attributeMax, label: "FE2.Effects.TargetTypes.AttributeMax", hasSubtype: true }
    ]
  },
  combat: {
    label: "FE2.Effects.Categories.Combat",
    types: [
      { type: EFFECT_TARGET_TYPES.defense, label: "FE2.Effects.TargetTypes.Defense" },
      { type: EFFECT_TARGET_TYPES.armour, label: "FE2.Effects.TargetTypes.Armour" },
      { type: EFFECT_TARGET_TYPES.armourZeroEnd, label: "FE2.Effects.TargetTypes.ArmourZeroEnd" },
      { type: EFFECT_TARGET_TYPES.hitBonus, label: "FE2.Effects.TargetTypes.HitBonus" },
      { type: EFFECT_TARGET_TYPES.enduranceDamage, label: "FE2.Effects.TargetTypes.EnduranceDamage" },
      { type: EFFECT_TARGET_TYPES.combatOrder, label: "FE2.Effects.TargetTypes.CombatOrder" },
      { type: EFFECT_TARGET_TYPES.movement, label: "FE2.Effects.TargetTypes.Movement" },
      { type: EFFECT_TARGET_TYPES.gritReroll, label: "FE2.Effects.TargetTypes.GritReroll" }
    ]
  },
  resources: {
    label: "FE2.Effects.Categories.Resources",
    types: [
      { type: EFFECT_TARGET_TYPES.enduranceCurrent, label: "FE2.Effects.TargetTypes.EnduranceCurrent" },
      { type: EFFECT_TARGET_TYPES.enduranceMax, label: "FE2.Effects.TargetTypes.EnduranceMax" },
      { type: EFFECT_TARGET_TYPES.equipmentCurrent, label: "FE2.Effects.TargetTypes.EquipmentCurrent" },
      { type: EFFECT_TARGET_TYPES.equipmentMax, label: "FE2.Effects.TargetTypes.EquipmentMax" },
      { type: EFFECT_TARGET_TYPES.influenceMax, label: "FE2.Effects.TargetTypes.InfluenceMax" },
      { type: EFFECT_TARGET_TYPES.resourcesMax, label: "FE2.Effects.TargetTypes.ResourcesMax" },
      { type: EFFECT_TARGET_TYPES.utilitiesMax, label: "FE2.Effects.TargetTypes.UtilitiesMax" },
      { type: EFFECT_TARGET_TYPES.recovery, label: "FE2.Effects.TargetTypes.Recovery" },
      { type: EFFECT_TARGET_TYPES.acquisition, label: "FE2.Effects.TargetTypes.Acquisition" },
      { type: EFFECT_TARGET_TYPES.arcane, label: "FE2.Effects.TargetTypes.Arcane" }
    ]
  },
  spacecraft: {
    label: "FE2.Effects.Categories.Spacecraft",
    types: [
      { type: EFFECT_TARGET_TYPES.shield, label: "FE2.Effects.TargetTypes.Shield" },
      { type: EFFECT_TARGET_TYPES.shieldRegen, label: "FE2.Effects.TargetTypes.ShieldRegen" },
      { type: EFFECT_TARGET_TYPES.cargoMax, label: "FE2.Effects.TargetTypes.CargoMax" },
      { type: EFFECT_TARGET_TYPES.weaponSlotsMax, label: "FE2.Effects.TargetTypes.WeaponSlotsMax" },
      { type: EFFECT_TARGET_TYPES.resupplyMax, label: "FE2.Effects.TargetTypes.ResupplyMax" }
    ]
  }
};

/* -------------------------------------------- */
/*  Key-to-TargetType Mapping                   */
/* -------------------------------------------- */

const KEY_MAP = {
  "fe2.skill.all": { targetType: EFFECT_TARGET_TYPES.allSkills, targetId: null },
  "fe2.attribute.all": { targetType: EFFECT_TARGET_TYPES.allAttributes, targetId: null },
  "fe2.endurance.current": { targetType: EFFECT_TARGET_TYPES.enduranceCurrent, targetId: null },
  "fe2.endurance.max": { targetType: EFFECT_TARGET_TYPES.enduranceMax, targetId: null },
  "fe2.equipment.current": { targetType: EFFECT_TARGET_TYPES.equipmentCurrent, targetId: null },
  "fe2.equipment.max": { targetType: EFFECT_TARGET_TYPES.equipmentMax, targetId: null },
  "fe2.armour": { targetType: EFFECT_TARGET_TYPES.armour, targetId: null },
  "fe2.armourzeroend": { targetType: EFFECT_TARGET_TYPES.armourZeroEnd, targetId: null },
  "fe2.hitbonus": { targetType: EFFECT_TARGET_TYPES.hitBonus, targetId: null },
  "fe2.endurancedamage": { targetType: EFFECT_TARGET_TYPES.enduranceDamage, targetId: null },
  "fe2.influence.max": { targetType: EFFECT_TARGET_TYPES.influenceMax, targetId: null },
  "fe2.resources.max": { targetType: EFFECT_TARGET_TYPES.resourcesMax, targetId: null },
  "fe2.utilities.max": { targetType: EFFECT_TARGET_TYPES.utilitiesMax, targetId: null },
  "fe2.gritreroll": { targetType: EFFECT_TARGET_TYPES.gritReroll, targetId: null },
  "fe2.combatorder": { targetType: EFFECT_TARGET_TYPES.combatOrder, targetId: null },
  "fe2.defense": { targetType: EFFECT_TARGET_TYPES.defense, targetId: null },
  "fe2.movement": { targetType: EFFECT_TARGET_TYPES.movement, targetId: null },
  "fe2.acquisition": { targetType: EFFECT_TARGET_TYPES.acquisition, targetId: null },
  "fe2.arcane": { targetType: EFFECT_TARGET_TYPES.arcane, targetId: null },
  "fe2.untrainedskill": { targetType: EFFECT_TARGET_TYPES.untrainedSkill, targetId: null },
  "fe2.recovery": { targetType: EFFECT_TARGET_TYPES.recovery, targetId: null },
  "fe2.shield": { targetType: EFFECT_TARGET_TYPES.shield, targetId: null },
  "fe2.shieldregen": { targetType: EFFECT_TARGET_TYPES.shieldRegen, targetId: null },
  "fe2.cargo.max": { targetType: EFFECT_TARGET_TYPES.cargoMax, targetId: null },
  "fe2.weaponslots.max": { targetType: EFFECT_TARGET_TYPES.weaponSlotsMax, targetId: null },
  "fe2.resupply.max": { targetType: EFFECT_TARGET_TYPES.resupplyMax, targetId: null }
};

/* -------------------------------------------- */
/*  Key Parser                                  */
/* -------------------------------------------- */

/**
 * Parse an fe2.* effect key into its target type and optional target ID.
 * @param {string} key - The effect change key (e.g., "fe2.skill.abc123")
 * @returns {{ targetType: string, targetId: string|null }|null}
 */
export function parseEffectKey(key) {
  if (!key || !key.startsWith("fe2.")) return null;

  // Check exact matches first
  const exact = KEY_MAP[key];
  if (exact) return { ...exact };

  // Check dynamic patterns: fe2.skill.<id>, fe2.attribute.<key>, fe2.attributemax.<key>
  const parts = key.split(".");
  if (parts.length === 3) {
    if (parts[1] === "skill") {
      return { targetType: EFFECT_TARGET_TYPES.skill, targetId: parts[2] };
    }
    if (parts[1] === "attribute") {
      return { targetType: EFFECT_TARGET_TYPES.attribute, targetId: parts[2] };
    }
    if (parts[1] === "attributemax") {
      return { targetType: EFFECT_TARGET_TYPES.attributeMax, targetId: parts[2] };
    }
  }

  return null;
}

/* -------------------------------------------- */
/*  Key Builder                                 */
/* -------------------------------------------- */

/**
 * Build an fe2.* effect key from a target type and optional target ID.
 * @param {string} targetType - One of EFFECT_TARGET_TYPES values
 * @param {string|null} targetId - Sub-identifier (skill ID, attribute key)
 * @returns {string}
 */
export function buildEffectKey(targetType, targetId) {
  switch (targetType) {
    case EFFECT_TARGET_TYPES.skill:
      return `fe2.skill.${targetId}`;
    case EFFECT_TARGET_TYPES.allSkills:
      return "fe2.skill.all";
    case EFFECT_TARGET_TYPES.attribute:
      return `fe2.attribute.${targetId}`;
    case EFFECT_TARGET_TYPES.allAttributes:
      return "fe2.attribute.all";
    case EFFECT_TARGET_TYPES.attributeMax:
      return `fe2.attributemax.${targetId}`;
    case EFFECT_TARGET_TYPES.enduranceCurrent:
      return "fe2.endurance.current";
    case EFFECT_TARGET_TYPES.enduranceMax:
      return "fe2.endurance.max";
    case EFFECT_TARGET_TYPES.equipmentCurrent:
      return "fe2.equipment.current";
    case EFFECT_TARGET_TYPES.equipmentMax:
      return "fe2.equipment.max";
    case EFFECT_TARGET_TYPES.armour:
      return "fe2.armour";
    case EFFECT_TARGET_TYPES.armourZeroEnd:
      return "fe2.armourzeroend";
    case EFFECT_TARGET_TYPES.hitBonus:
      return "fe2.hitbonus";
    case EFFECT_TARGET_TYPES.enduranceDamage:
      return "fe2.endurancedamage";
    case EFFECT_TARGET_TYPES.influenceMax:
      return "fe2.influence.max";
    case EFFECT_TARGET_TYPES.resourcesMax:
      return "fe2.resources.max";
    case EFFECT_TARGET_TYPES.utilitiesMax:
      return "fe2.utilities.max";
    case EFFECT_TARGET_TYPES.gritReroll:
      return "fe2.gritreroll";
    case EFFECT_TARGET_TYPES.combatOrder:
      return "fe2.combatorder";
    case EFFECT_TARGET_TYPES.defense:
      return "fe2.defense";
    case EFFECT_TARGET_TYPES.movement:
      return "fe2.movement";
    case EFFECT_TARGET_TYPES.acquisition:
      return "fe2.acquisition";
    case EFFECT_TARGET_TYPES.arcane:
      return "fe2.arcane";
    case EFFECT_TARGET_TYPES.untrainedSkill:
      return "fe2.untrainedskill";
    case EFFECT_TARGET_TYPES.recovery:
      return "fe2.recovery";
    case EFFECT_TARGET_TYPES.shield:
      return "fe2.shield";
    case EFFECT_TARGET_TYPES.shieldRegen:
      return "fe2.shieldregen";
    case EFFECT_TARGET_TYPES.cargoMax:
      return "fe2.cargo.max";
    case EFFECT_TARGET_TYPES.weaponSlotsMax:
      return "fe2.weaponslots.max";
    case EFFECT_TARGET_TYPES.resupplyMax:
      return "fe2.resupply.max";
    default:
      return "";
  }
}

/* -------------------------------------------- */
/*  Character Attribute Keys                    */
/* -------------------------------------------- */

export const CHARACTER_ATTRIBUTES = ["strength", "reflexes", "mobility", "focus", "intelligence", "grit"];

export const SPACECRAFT_ATTRIBUTES = ["hull", "engines", "crew", "power", "cpu", "sensors", "velocity"];
