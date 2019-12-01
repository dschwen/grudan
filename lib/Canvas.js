/*jshint esversion: 6 */

var $ = require('jquery');

class Canvas
{
  constructor(w, h) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    this.resize(w, h);
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
  }

  getData(sx = 0, sy = 0, sw = this.canvas.width, sh = this.canvas.height) {
    return this.ctx.getImageData(sx, sy, sw, sh);
  }

  putData(data, sx = 0, sy = 0) {
    this.ctx.putImageData(data, sx, sy);
  }
}

module.exports = Canvas;
