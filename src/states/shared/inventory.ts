import Item, { AvailableItemNames } from "../../objects/Item";

const CreateInventory = () => {
  const TOTAL_SLOTS = 6;
  let inventory = [];
  let loots = [];

  return {
    get freeSlots() {
      return TOTAL_SLOTS - inventory.length;
    },

    get inventory() {
      return [...inventory];
    },

    addLoot(scene, itemName: AvailableItemNames, x: number, y: number) {
      loots.push(
        new Item(scene, itemName, {
          x, y, autoInsert: true, kind: 'loot'
        })
      )
    },

    addItemOnInventory(lootIdx) {

    },

    moveLootToInventory() {
      // ToDo
    },

    update() {

    }
  }
};

// this.loot.forEach((item) => {
//   if (
//     item.waitingForCollect &&
//     (this.player.x - 50 <= item.x && item.x <= this.player.x + 50) &&
//     (this.player.y - 50 <= item.y && item.y <= this.player.y + 50)
//   ) {
//     this.cursor.setFrame(Cursor.KEYS.DEFAULT);
//     item.waitingForCollect = false;
//     if (this.inventory.addItem(item.key)) {
//       item.destroy();
//     }
//   }
// });
export type InventoryState = ReturnType<typeof CreateInventory>;
export default CreateInventory;
