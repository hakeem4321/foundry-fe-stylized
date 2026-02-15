/**
 * Custom ActiveEffect configuration sheet for Fragged Empire 2E.
 * Overrides the Changes tab to show categorized target type dropdowns.
 */

import { EFFECT_CATEGORIES, EFFECT_TARGET_TYPES, CHARACTER_ATTRIBUTES, SPACECRAFT_ATTRIBUTES, parseEffectKey, buildEffectKey } from "./fragged-empire-effect-types.js";
import { FraggedEmpireUtility } from "../fragged-empire-utility.js";

const { HandlebarsApplicationMixin } = foundry.applications.api;

export class FraggedEmpireEffectSheet extends foundry.applications.sheets.ActiveEffectConfig {

  /* -------------------------------------------- */
  static DEFAULT_OPTIONS = {
    classes: ["foundry-fe2", "sheet", "active-effect"],
    position: { width: 560, height: 500 },
    actions: {
      addChange: FraggedEmpireEffectSheet.#onAddChange,
      deleteChange: FraggedEmpireEffectSheet.#onDeleteChange
    }
  };

  /* -------------------------------------------- */
  static PARTS = {
    ...super.PARTS,
    changes: { template: "systems/foundry-fe2/templates/effects/effect-changes-tab.html" }
  };

  /* -------------------------------------------- */
  async _preparePartContext(partId, context, options) {
    context = await super._preparePartContext(partId, context, options);

    if (partId === "changes") {
      context.targetTypeOptions = EFFECT_CATEGORIES;
      context.changes = this._prepareChangesContext();
    }

    return context;
  }

  /* -------------------------------------------- */
  /**
   * Parse existing effect changes back into target type + subtype for display.
   * @returns {Array<object>}
   */
  _prepareChangesContext() {
    const changes = this.document.changes || [];
    return changes.map((change, idx) => {
      const parsed = parseEffectKey(change.key);
      const entry = {
        key: change.key,
        value: change.value,
        mode: change.mode,
        targetType: parsed?.targetType ?? "",
        targetId: parsed?.targetId ?? "",
        hasSubtype: false,
        subtypeOptions: []
      };

      // Determine if this target type needs a subtype dropdown
      if (parsed) {
        if (parsed.targetType === EFFECT_TARGET_TYPES.skill) {
          entry.hasSubtype = true;
          entry.subtypeOptions = this._getSkillOptions();
        } else if (parsed.targetType === EFFECT_TARGET_TYPES.attribute || parsed.targetType === EFFECT_TARGET_TYPES.attributeMax) {
          entry.hasSubtype = true;
          entry.subtypeOptions = this._getAttributeOptions();
        }
      }

      return entry;
    });
  }

  /* -------------------------------------------- */
  /**
   * Build skill options from the compendium cache.
   * @returns {Array<{value: string, label: string}>}
   */
  _getSkillOptions() {
    const skills = FraggedEmpireUtility.compendiumSkills || [];
    return skills.map(s => ({ value: s._id, label: s.name }));
  }

  /* -------------------------------------------- */
  /**
   * Build attribute options based on the parent actor type.
   * @returns {Array<{value: string, label: string}>}
   */
  _getAttributeOptions() {
    const parent = this.document.parent;
    const isSpacecraft = parent?.type === "spacecraft";
    const attrs = isSpacecraft ? SPACECRAFT_ATTRIBUTES : CHARACTER_ATTRIBUTES;
    const prefix = isSpacecraft ? "FE2.SpacecraftAttr." : "FE2.Attributes.";

    return attrs.map(key => ({
      value: key,
      label: game.i18n.localize(prefix + key.charAt(0).toUpperCase() + key.slice(1))
    }));
  }

  /* -------------------------------------------- */
  async _prepareSubmitData(event, form, formData) {
    const data = await super._prepareSubmitData(event, form, formData);

    // Convert our custom form fields back into standard changes array
    const changesEls = this.element.querySelectorAll(".effect-change-entry");
    const changes = [];

    for (const el of changesEls) {
      const targetTypeSelect = el.querySelector("[data-field='targetType']");
      const targetIdSelect = el.querySelector("[data-field='targetId']");
      const modeSelect = el.querySelector("[data-field='mode']");
      const valueInput = el.querySelector("[data-field='value']");

      const targetType = targetTypeSelect?.value || "";
      const targetId = targetIdSelect?.value || null;
      const mode = Number(modeSelect?.value) || 2;
      const value = valueInput?.value || "0";

      if (targetType) {
        const key = buildEffectKey(targetType, targetId);
        if (key) changes.push({ key, value, mode });
      }
    }

    data.changes = changes;
    return data;
  }

  /* -------------------------------------------- */
  /*  Action Handlers                              */
  /* -------------------------------------------- */

  static #onAddChange(event, target) {
    const changes = foundry.utils.deepClone(this.document.changes || []);
    changes.push({ key: "", value: "0", mode: 2 });
    this.document.update({ changes });
  }

  static #onDeleteChange(event, target) {
    const idx = Number(target.dataset.index);
    const changes = foundry.utils.deepClone(this.document.changes || []);
    changes.splice(idx, 1);
    this.document.update({ changes });
  }
}
