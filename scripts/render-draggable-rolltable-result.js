async function getItemFromTableRoll(tableResult) {
  let comp = game.packs.get(tableResult.collection);
  const item = await comp.getDocument(tableResult.resultId);
  return item;
}

async function getDraggableItemCardContent(itm) {
  const templateData = {
    item: itm.data,
    pack: itm.pack,
    data: itm.getChatData(),
    labels: itm.labels,
    hasAttack: itm.hasAttack,
    isHealing: itm.isHealing,
    hasDamage: itm.hasDamage,
    isVersatile: itm.isVersatile,
    isSpell: itm.data.type === "spell",
    hasSave: itm.hasSave,
    hasAreaTarget: itm.hasAreaTarget,
    isTool: itm.data.type === "tool",
    hasAbilityCheck: itm.hasAbilityCheck
  };
  
  return await renderTemplate("modules/multi-rolltable-cards/templates/item-card-draggable.html", templateData);
}