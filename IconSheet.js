/*jshint esversion: 6 */

class IconSheet
{
    constructor(image) {
      this.w = 16;
      this.h = 16;
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = image.offsetWidth;
      this.canvas.height = image.offsetHeight;
      this.ctx.drawImage(sourceimage, 0, 0);
    }
}

module.exports.IconSheet = IconSheet;
