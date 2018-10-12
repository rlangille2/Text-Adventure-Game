
export class GameLoop {
    constructor(_ctx){
        this.ctx = _ctx;
        this.currentTime = 0;
        this.dt = 0;
        this.fps = 30;
        this.interval = 1000/this.fps;
        this.lastTime = (new Date()).getTime();
        this.assets = new Array();
    }

    gameLoop(){
        requestAnimationFrame(()=> {this.gameLoop()});
        this.currentTime = (new Date()).getTime();
        this.dt = (this.currentTime - this.lastTime);

        if(this.dt > this.interval){    
            this.render();
            this.lastTime = this.currentTime - (this.dt % this.interval);
        }
    }

    render(){
        for(var i=0, len=this.assets.length; i < len; i++){
            if(this.assets[i].state === true){
                this.ctx.drawImage(this.assets[i].img, this.assets[i].x, this.assets[i].y);
            }
        }
    }

    setAssets(_assets){
        this.assets = _assets;
    }

}
