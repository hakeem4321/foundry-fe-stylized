import { FraggedEmpireUtility } from "./fragged-empire-utility.js";

/* -------------------------------------------- */
export class FraggedEmpireCombat extends Combat {
  
  /* -------------------------------------------- */
  async rollInitiative(ids, formula = undefined, messageOptions = {} ) {
    if (this.combatant?.actor.type == 'spacecraft') {
      let phase = 1;
      if (this.round % 2 === 0) { phase = 2 };
      ids = typeof ids === "string" ? [ids] : ids;
      for (let cId = 0; cId < ids.length; cId++) {
        const c = this.combatants.get(ids[cId]);
        let initBonus = c.actor ? c.actor.getInitiativeScore(phase) : 0;
        await this.updateEmbeddedDocuments("Combatant", [{ _id: c.id, initiative: initBonus }]);
      }
    } else {
      ids = typeof ids === "string" ? [ids] : ids;
      for (let cId = 0; cId < ids.length; cId++) {
        const c = this.combatants.get(ids[cId]);
        let initBonus = c.actor ? c.actor.getInitiativeScore() : 0;
        await this.updateEmbeddedDocuments("Combatant", [{ _id: c.id, initiative: initBonus }]);
      }
    }
    return this;
  }

}
