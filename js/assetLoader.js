
export class AssetLoader{
    constructor(){
        this.assets = new Array();
    }
    
    render(_obj){
        this.assets.push(_obj);
    }

    getAssets(){
        return this.assets;
    }
}