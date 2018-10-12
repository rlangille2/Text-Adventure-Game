import {Canvas} from './canvas.js';
import {GameLoop} from './gameLoop.js';
import {Asset} from './asset.js';
import {AssetLoader} from './assetLoader.js';

var canvas = new Canvas(600,600);
var ctx = canvas.getCtx();
var gameLoop = new GameLoop(ctx);
var rita = new Asset("img/rita.png", 0, 0, true);
var assetLoader = new AssetLoader();
    assetLoader.render(rita);

gameLoop.setAssets(assetLoader.assets);
gameLoop.gameLoop();