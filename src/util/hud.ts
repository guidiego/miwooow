import Phaser from "phaser";

export const borderGenerator = (graphics: Phaser.GameObjects.Graphics, width: number, height: number, contentSpanX: number, contentSpanY: number, borderOpts: number[] = [
  0x805700,
  0xffb71c,
  0xb37a00
]) => {
  graphics.lineStyle(2, borderOpts[0], 100);
  graphics.strokeRoundedRect(0, 0, width + contentSpanX, height + contentSpanY, 5);

  graphics.lineStyle(2, borderOpts[1], 100);
  graphics.strokeRoundedRect(-2, -2, width + contentSpanX + 4, height + contentSpanY + 4, 7);

  graphics.lineStyle(1, borderOpts[2], 100);
  graphics.strokeRoundedRect(-4, -4, width + contentSpanX + 8, height + contentSpanY + 8, 9);
}
