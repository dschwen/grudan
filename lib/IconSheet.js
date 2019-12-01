/*jshint esversion: 6 */

class IconSheet
{
    constructor() {
      // icon size
      this.iw = 16;
      this.ih = 16;

      // number of icons in each direction
      this.nw = 0;
      this.nh = 0;
      this.N = 0;

      // build canvas element
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext('2d');
    }

    resize(N) {
      var root = math.sqrt(N);
      this.nw = Math.ceil(root);
      this.nh = Math.floor(root);
      this.N = this.nw * this.nh;
      this.sizeCanvas();
    }

    sizeCanvas() {
      this.canvas.width = this.nw * this.iw;
      this.canvas.height = this.nh * this.ih;
    }

    setImage(image) {
      var sw = image.width;
      var sh = image.height;

      this.nw = Math.ceil(sw/this.iw);
      this.nh = Math.ceil(sh/this.ih);
      this.N = this.nw * this.nh;
      this.sizeCanvas();
      this.ctx.drawImage(image, 0, 0);
    }
}

module.exports = IconSheet;
