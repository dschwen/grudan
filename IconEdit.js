/*jshint esversion: 6 */

class IconEdit
{
  constructor(state) {
    this.state = state;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext('2d');

    this.backPattern = makeBackgroundPattern(4);
  }

  setIcon(icon) {
    this.icon = icon;
  }

  setPixel(x, y, c) {

  }

  makeBackgroundPattern(mul) {
    var canvas = document.createElement("canvas");
    canvas.width = this.w * mul;
    canvas.height = this.h * mul;
    var ctx = this.canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var i = 0;
    for (let x = 0; x < imageData.width; ++x) {
      for (let y = 0; y < imageData.width; ++y) {
        let c = 0.5 * ((x+y) % 2) + 0.25;
        data[i] = c;
        data[i+1] = c;
        data[i+2] = c;
        data[i+3] = 1;
        i += 4;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return ctx;
  }
}

module.exports.IconEdit = IconEdit;
