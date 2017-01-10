//地图配置
var config = [
    { x: 1, y: 1, walkable: false, image: "1_png" },
    { x: 2, y: 1, walkable: false, image: "1_png" },
    { x: 3, y: 1, walkable: false, image: "2_png" },
    { x: 4, y: 1, walkable: false, image: "2_png" },
    { x: 5, y: 1, walkable: false, image: "1_png" },
    { x: 6, y: 1, walkable: false, image: "1_png" },
    { x: 7, y: 1, walkable: false, image: "1_png" },
    { x: 8, y: 1, walkable: false, image: "1_png" },
    { x: 9, y: 1, walkable: false, image: "1_png" },
    { x: 10, y: 1, walkable: false, image: "1_png" },
    { x: 1, y: 2, walkable: false, image: "1_png" },
    { x: 2, y: 2, walkable: false, image: "2_png" },
    { x: 3, y: 2, walkable: false, image: "1_png" },
    { x: 4, y: 2, walkable: false, image: "1_png" },
    { x: 5, y: 2, walkable: false, image: "1_png" },
    { x: 6, y: 2, walkable: false, image: "2_png" },
    { x: 7, y: 2, walkable: false, image: "2_png" },
    { x: 8, y: 2, walkable: false, image: "1_png" },
    { x: 9, y: 2, walkable: false, image: "2_png" },
    { x: 10, y: 2, walkable: false, image: "1_png" },
    { x: 1, y: 3, walkable: false, image: "2_png" },
    { x: 2, y: 3, walkable: false, image: "1_png" },
    { x: 3, y: 3, walkable: false, image: "1_png" },
    { x: 4, y: 3, walkable: false, image: "2_png" },
    { x: 5, y: 3, walkable: false, image: "1_png" },
    { x: 6, y: 3, walkable: true, image: "1_png" },
    { x: 7, y: 3, walkable: true, image: "1_png" },
    { x: 8, y: 3, walkable: true, image: "1_png" },
    { x: 9, y: 3, walkable: true, image: "1_png" },
    { x: 10, y: 3, walkable: true, image: "1_png" },
    { x: 1, y: 4, walkable: true, image: "2_png" },
    { x: 2, y: 4, walkable: true, image: "1_png" },
    { x: 3, y: 4, walkable: true, image: "2_png" },
    { x: 4, y: 4, walkable: true, image: "2_png" },
    { x: 5, y: 4, walkable: true, image: "1_png" },
    { x: 6, y: 4, walkable: true, image: "2_png" },
    { x: 7, y: 4, walkable: true, image: "2_png" },
    { x: 8, y: 4, walkable: false, image: "1_png" },
    { x: 9, y: 4, walkable: false, image: "2_png" },
    { x: 10, y: 4, walkable: true, image: "1_png" },
    { x: 1, y: 5, walkable: true, image: "1_png" },
    { x: 2, y: 5, walkable: false, image: "1_png" },
    { x: 3, y: 5, walkable: false, image: "1_png" },
    { x: 4, y: 5, walkable: false, image: "1_png" },
    { x: 5, y: 5, walkable: false, image: "1_png" },
    { x: 6, y: 5, walkable: true, image: "1_png" },
    { x: 7, y: 5, walkable: true, image: "2_png" },
    { x: 8, y: 5, walkable: false, image: "1_png" },
    { x: 9, y: 5, walkable: false, image: "2_png" },
    { x: 10, y: 5, walkable: true, image: "1_png" },
    { x: 1, y: 6, walkable: true, image: "1_png" },
    { x: 2, y: 6, walkable: false, image: "2_png" },
    { x: 3, y: 6, walkable: false, image: "1_png" },
    { x: 4, y: 6, walkable: true, image: "2_png" },
    { x: 5, y: 6, walkable: true, image: "1_png" },
    { x: 6, y: 6, walkable: true, image: "1_png" },
    { x: 7, y: 6, walkable: false, image: "1_png" },
    { x: 8, y: 6, walkable: false, image: "1_png" },
    { x: 9, y: 6, walkable: false, image: "1_png" },
    { x: 10, y: 6, walkable: true, image: "1_png" },
    { x: 1, y: 7, walkable: true, image: "1_png" },
    { x: 2, y: 7, walkable: false, image: "2_png" },
    { x: 3, y: 7, walkable: false, image: "1_png" },
    { x: 4, y: 7, walkable: true, image: "2_png" },
    { x: 5, y: 7, walkable: false, image: "2_png" },
    { x: 6, y: 7, walkable: true, image: "1_png" },
    { x: 7, y: 7, walkable: true, image: "2_png" },
    { x: 8, y: 7, walkable: true, image: "2_png" },
    { x: 9, y: 7, walkable: true, image: "1_png" },
    { x: 10, y: 7, walkable: true, image: "2_png" },
    { x: 1, y: 8, walkable: true, image: "1_png" },
    { x: 2, y: 8, walkable: true, image: "1_png" },
    { x: 3, y: 8, walkable: true, image: "1_png" },
    { x: 4, y: 8, walkable: true, image: "1_png" },
    { x: 5, y: 8, walkable: true, image: "1_png" },
    { x: 6, y: 8, walkable: true, image: "1_png" },
    { x: 7, y: 8, walkable: true, image: "2_png" },
    { x: 8, y: 8, walkable: false, image: "1_png" },
    { x: 9, y: 8, walkable: false, image: "1_png" },
    { x: 10, y: 8, walkable: true, image: "2_png" },
    { x: 1, y: 9, walkable: true, image: "1_png" },
    { x: 2, y: 9, walkable: false, image: "2_png" },
    { x: 3, y: 9, walkable: false, image: "1_png" },
    { x: 4, y: 9, walkable: false, image: "2_png" },
    { x: 5, y: 9, walkable: true, image: "2_png" },
    { x: 6, y: 9, walkable: true, image: "1_png" },
    { x: 7, y: 9, walkable: true, image: "1_png" },
    { x: 8, y: 9, walkable: false, image: "1_png" },
    { x: 9, y: 9, walkable: false, image: "2_png" },
    { x: 10, y: 9, walkable: true, image: "1_png" },
    { x: 1, y: 10, walkable: true, image: "1_png" },
    { x: 2, y: 10, walkable: false, image: "1_png" },
    { x: 3, y: 10, walkable: false, image: "1_png" },
    { x: 4, y: 10, walkable: false, image: "1_png" },
    { x: 5, y: 10, walkable: false, image: "1_png" },
    { x: 6, y: 10, walkable: false, image: "1_png" },
    { x: 7, y: 10, walkable: true, image: "2_png" },
    { x: 8, y: 10, walkable: true, image: "2_png" },
    { x: 9, y: 10, walkable: true, image: "1_png" },
    { x: 10, y: 10, walkable: true, image: "1_png" },
];
//格子类
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap;
        var size = 50;
        bitmap.texture = RES.getRes(data.image);
        bitmap.x = (data.x - 1) * size;
        bitmap.y = (data.y - 1) * size;
        this.addChild(bitmap);
        //console.log(data.image)
    }
    var d = __define,c=Tile,p=c.prototype;
    p.clickEvent = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
//地图类
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    //private static instance;
    //public static getInstance() {
    //    if (TileMap.instance == null) {
    //        TileMap.instance = new TileMap;
    //    }
    //    return TileMap.instance;
    //}
    function TileMap() {
        _super.call(this);
        this.map = new egret.Bitmap;
        this.grid = new Grid(10, 10);
        this.astar = new AStar();
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.map.texture = RES.getRes("map_png");
        this.addChild(this.map);
        this.touchEnabled = true;
    };
    p.initEventListener = function (chara) {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            //console.log(e.currentTarget);
            var startx = Math.floor((chara._body.x) / 50);
            var starty = Math.floor(chara._body.y / 50);
            var endx = Math.floor(e.localX / 50);
            var endy = Math.floor(e.localY / 50);
            //console.log("stageX:" + e.stageX + "stageY:" + e.stageY);
            //if (e.localX >= 450 && e.localX <= 500 && e.localY >= 100 && e.localY <= 150) {
            //    endx = 8;
            //    endy = 2;
            //}
            //console.log("endx:" + endx + "endy:" + endy);
            var path = this.astarPath(startx, starty, endx, endy);
            if (path.length > 1) {
                if (startx != endx || starty != endy) {
                    CommandList.getInstance().addCommand(new WalkCommand(e.localX, e.localY, path, chara));
                    CommandList.getInstance().execute();
                }
            }
        }, this);
    };
    p.astarPath = function (beginX, beginY, endX, endY) {
        var path = new Array();
        this.grid.setStartPoint(beginX, beginY);
        this.grid.setEndPoint(endX, endY);
        if (this.astar.findPath(this.grid)) {
            path = this.astar.getPath();
        }
        return path;
    };
    TileMap.TILE_SIZE = 100;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
//# sourceMappingURL=Map.js.map