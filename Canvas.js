/*jshint esversion: 6 */

var $ = require('jquery');

class Canvas
{
  constructor(w, h) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    resize(w, h);
  }

  resize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
  }

  getData(sx, sy, sw, sh) {
    sx = sx || 0;
    sy = sy || 0;
    sw = sw || this.canvas.width;
    sh = sh || this.canvas.height;
    return this.ctx.getImageData(sx, sy, sw, sh);
  }

  putData(data, sx, sy) {
    sx = sx || 0;
    sy = sy || 0;
    this.ctx.putImageData(data, sx, sy);
  }
}

modules.exports.Canvas = Canvas;
