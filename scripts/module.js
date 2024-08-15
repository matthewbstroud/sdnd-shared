
let items = {
    "common": {
        "getItemUuidByName": function _getItemUuidByName(name) {
            return game.packs.get("sdnd-shared.sdnd-common-items")?.index?.find(i => i.name == name)?.uuid ?? game.items.getName(name)?.uuid;
        }
    }
}

globalThis['sdndShared'] = {
    items
}