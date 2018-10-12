
export class Asset{
    constructor(_url, _x, _y, _bool){
        this.img = new Image;
        this.img.src = _url
        this.x = _x;
        this.y = _y;
        this.state = _bool;
    }
    
    getState(){
        return this.state;
    }

    setState(_state){
        this.state = _state;
    }
}
