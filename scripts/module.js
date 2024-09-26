const migrationPacks = [
    `sdnd-shared.sdnd-ddb-items`,
    `sdnd-shared.sdnd-common-items`,
    `sdnd-shared.sdnd-ddb-monsters`,
    `sdnd-shared.sdnd-ddb-spells`
];

let items = {
    "common": {
        "getItemUuidByName": function _getItemUuidByName(name) {
            return game.packs.get("sdnd-shared.sdnd-common-items")?.index?.find(i => i.name == name)?.uuid ?? game.items.getName(name)?.uuid;
        }
    }
}
let utility = {
    "forceDnd5eMigration": async function _forceDnd5eMigration() {
        for (const packID of migrationPacks) {
            let pack = await game.packs.get(packID);
            await dnd5e.migrations.migrateCompendium(pack);
        }
        console.log("sdnd-shared compendium migration complete...");
    }
};
globalThis['sdndShared'] = {
    items,
    utility
}