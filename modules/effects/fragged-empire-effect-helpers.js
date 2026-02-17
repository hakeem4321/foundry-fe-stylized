/**
 * Effect modifier collection and application helpers.
 * Provides factory, collection, application, and suppression functions.
 */

import { EFFECT_TARGET_TYPES, parseEffectKey } from "./fragged-empire-effect-types.js";

/* -------------------------------------------- */
/*  Constants                                   */
/* -------------------------------------------- */

const ADD = 2;
const MULTIPLY = 1;

/* -------------------------------------------- */
/*  Modifier Map Factory                        */
/* -------------------------------------------- */

/**
 * Create an empty modifiers map with all target type buckets.
 * @returns {object}
 */
export function createEmptyModifiers() {
  return {
    skills: {},
    attributes: {},
    attributeMax: {},
    defense: [],
    armour: [],
    armourZeroEnd: [],
    hitBonus: [],
    enduranceDamage: [],
    enduranceMax: [],
    equipmentMax: [],
    influenceMax: [],
    resourcesMax: [],
    utilitiesMax: [],
    gritReroll: [],
    combatOrder: [],
    movement: [],
    acquisition: [],
    arcane: [],
    untrainedSkill: [],
    recovery: [],
    shield: [],
    shieldRegen: [],
    cargoMax: [],
    weaponSlotsMax: [],
    resupplyMax: []
  };
}

/* -------------------------------------------- */
/*  Modifier Collection                         */
/* -------------------------------------------- */

/**
 * Add a modifier entry to the appropriate bucket in the modifiers map.
 * @param {object} modifiers - The modifiers map from createEmptyModifiers()
 * @param {{ targetType: string, targetId: string|null }} parsed - Parsed key result
 * @param {object} change - The effect change object { key, value, mode }
 * @param {string} effectName - Display name of the source effect
 * @param {string} effectId - ID of the source effect
 */
export function addModifier(modifiers, parsed, change, effectName, effectId) {
  const entry = {
    value: Number(change.value) || 0,
    mode: change.mode,
    effectName,
    effectId
  };

  switch (parsed.targetType) {
    case EFFECT_TARGET_TYPES.skill:
      if (!modifiers.skills[parsed.targetId]) modifiers.skills[parsed.targetId] = [];
      modifiers.skills[parsed.targetId].push(entry);
      break;
    case EFFECT_TARGET_TYPES.allSkills:
      if (!modifiers.skills.all) modifiers.skills.all = [];
      modifiers.skills.all.push(entry);
      break;
    case EFFECT_TARGET_TYPES.attribute:
      if (!modifiers.attributes[parsed.targetId]) modifiers.attributes[parsed.targetId] = [];
      modifiers.attributes[parsed.targetId].push(entry);
      break;
    case EFFECT_TARGET_TYPES.allAttributes:
      if (!modifiers.attributes.all) modifiers.attributes.all = [];
      modifiers.attributes.all.push(entry);
      break;
    case EFFECT_TARGET_TYPES.attributeMax:
      if (!modifiers.attributeMax[parsed.targetId]) modifiers.attributeMax[parsed.targetId] = [];
      modifiers.attributeMax[parsed.targetId].push(entry);
      break;
    default: {
      // Simple target types map directly to a bucket array
      const bucket = modifiers[parsed.targetType];
      if (bucket) bucket.push(entry);
      break;
    }
  }
}

/* -------------------------------------------- */
/*  Modifier Application                        */
/* -------------------------------------------- */

/**
 * Apply a list of modifiers to a base value.
 * Additions are summed first, then multiplications are compounded.
 * Result is clamped to a minimum of 0.
 * @param {number} baseValue - The starting value
 * @param {Array} modifiers - Array of { value, mode } modifier entries
 * @returns {number}
 */
export function applyModifiers(baseValue, modifiers) {
  if (!modifiers || modifiers.length === 0) return baseValue;

  let sumAdds = 0;
  let productMultiplies = 1;

  for (const mod of modifiers) {
    if (mod.mode === ADD) {
      sumAdds += mod.value;
    } else if (mod.mode === MULTIPLY) {
      productMultiplies *= mod.value;
    }
  }

  const result = (baseValue + sumAdds) * productMultiplies;
  return Math.max(0, result);
}

/* -------------------------------------------- */
/*  Equip Suppression                           */
/* -------------------------------------------- */

const EQUIPPABLE_TYPES = new Set(["weapon", "outfit", "utility", "spacecraftweapon", "equipment"]);

/**
 * Check if an effect should be suppressed because its origin item is unequipped.
 * @param {ActiveEffect} effect - The effect to check
 * @param {Actor} actor - The owning actor
 * @returns {boolean} True if the effect should be suppressed
 */
export function isEquipSuppressed(effect, actor) {
  if (!effect.origin) return false;

  // Find the origin item on the actor
  const originId = effect.origin.split(".").pop();
  const item = actor.items.get(originId);
  if (!item) return false;

  // Only suppress for equippable item types
  if (!EQUIPPABLE_TYPES.has(item.type)) return false;

  // Suppress if item has equipped field and is not equipped
  if ("equipped" in item.system && item.system.equipped === false) return true;

  return false;
}
