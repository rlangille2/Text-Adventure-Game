
export class Canvas {
    constructor(_width, _height){
        this.div = document.getElementById("grid1");
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = _width;
        this.canvas.height = _height;

        this.div.appendChild(this.canvas);
    }

    getCtx(){
        return this.ctx;
    }

}
