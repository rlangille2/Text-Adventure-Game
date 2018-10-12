
export class Canvas {
    constructor(_width, _height){
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = _width;
        this.canvas.height = _height;

        document.body.appendChild(this.canvas);
    }

    getCtx(){
        return this.ctx;
    }

}
