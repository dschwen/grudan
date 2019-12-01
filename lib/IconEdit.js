/*jshint esversion: 6 */

const $ = require('jquery');

const Canvas = require('./Canvas.js')

class IconEdit
{
  constructor(state) {
    this.state = state;
    this.w = 16;
    this.h = 16;

    this.back = new Canvas(this.w, this.h);
    this.front = new Canvas(this.w * this.mul, this.h * this.mul);
    this.pattern = new Canvas(this.w * this.mul, this.h * this.mul);
  }

  setData(icon) {
    this.icon = icon;
  }

  setPixel(x, y, c) {

  }

  update() {
    this.ctx.drawImage(backbuffer, 0, 0, backbuffer.width, backbuffer.height, 0, 0, canvas.width, canvas.height);
  }

  makeBackgroundPattern() {
    var imageData = this.pattern.getData();
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
    pattern.putData(imageData);
  }
}

module.exports = IconEdit;
