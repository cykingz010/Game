var SceneService = (function () {
    function SceneService() {
        this.observerList = [];
        this.taskList = [];
        this.monsterList = [];
    }
    var d = __define,c=SceneService,p=c.prototype;
    //private monsterPanel: MonsterPanel = new MonsterPanel();;
    SceneService.getInstance = function () {
        if (SceneService.instance == null) {
            SceneService.instance = new SceneService;
        }
        return SceneService.instance;
    };
    p.init = function () {
        var data = RES.getRes("gameconfig_json");
        for (var i = 0; i < data.monsters.length; i++) {
            this.monsterList.push(new Monster(data.monsters[i].image, data.monsters[i].id, data.monsters[i].linkTaskId));
            var task = TaskService.getInstance().taskList[data.monsters[i].linkTaskId];
            this.taskList.push(task);
        }
        //this.monsterList.push(new Monster("monster_jpg","0","1"));
        //this.taskList.push(TaskService.getInstance().taskList[1]); //临时往里面塞一个任务触发用
        for (var i = 0; i < this.monsterList.length; i++) {
            this.observerList.push(this.monsterList[i]);
        }
        this.observerList.push(new KillMonsterTaskCondition());
    };
    p.wakeUpMonster = function (id) {
        for (var i = 0; i < this.monsterList.length; i++) {
            if (this.monsterList[i].id == id) {
                this.monsterList[i].onAwake();
            }
        }
    };
    p.killMonster = function (id) {
        //console.log(id);
        for (var i = 0; i < this.monsterList.length; i++) {
            if (this.monsterList[i].id == id) {
                this.monsterList[i].onSleep();
                this.callback();
                Bag.getInstance().addItemToBag("血腥砍刀"); //掉落
            }
        }
    };
    p.addObserver = function (o) {
        this.observerList.push(o);
    };
    p.notify = function (task) {
        for (var i = 0; i < SceneService.getInstance().observerList.length; i++) {
            this.observerList[i].onChange(task);
        }
    };
    p.commandFight = function (linkTaskId, callback) {
        this.callback = callback;
        this.accept(linkTaskId);
        //console.log("commandFight");
    };
    p.accept = function (id) {
        //console.log("accept monster:"+id);
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                console.log("accept success");
                var task = this.taskList[i];
                this.notify(task);
                break;
            }
        }
        //this.notify(this.taskList[0]);  //这个是临时的任务
    };
    p.submit = function (id) {
    };
    return SceneService;
}());
egret.registerClass(SceneService,'SceneService');
/*class MonsterPanel extends egret.DisplayObjectContainer {
    private bg: egret.Bitmap = new egret.Bitmap;
    private currentMonster: Monster;
    constructor() {
        super();
    }
    private onClick() {
        SceneService.getInstance().accept(this.currentMonster._linkTaskId);
    }
    public Awake(monster:Monster){
        this.currentMonster = monster;
        this.bg.texture = RES.getRes("monster_jpg");
        this.bg.x = this.currentMonster.x + 50;
        this.bg.y = this.currentMonster.y + 50;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.bg.touchEnabled = true;
        this.addChild(this.bg);
        //this.addChild(this.bg);
        console.log("monster panel awake");
        console.log(this.bg);
    }
    public Sleep(){
        this.removeChild(this.bg);
    }
}*/
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(image, id, taskId) {
        _super.call(this);
        this._image = new egret.Bitmap;
        this._count = new egret.Shape;
        this.isFight = false;
        this.count = 9;
        this._id = id;
        this._linkTaskId = taskId;
        this._image.texture = RES.getRes(image);
        this._count.graphics.clear();
        this._count.graphics.beginFill(0xff0000, 1.0);
        this._count.graphics.drawRect(0, 0, 50, 5);
        this._count.graphics.endFill();
        this.width = 50;
        this.height = 50;
        this.x = 200;
        this.y = 350;
        this._image.touchEnabled = true;
        //this.addChild(this._image);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    var d = __define,c=Monster,p=c.prototype;
    d(p, "id"
        ,function () {
            return this._id;
        }
    );
    d(p, "linkTaskId"
        ,function () {
            return this._linkTaskId;
        }
    );
    p.onClick = function (e) {
        var startx = Math.floor((GameScene.chara._body.x) / 50);
        var starty = Math.floor(GameScene.chara._body.y / 50);
        var endx = Math.floor(e.stageX / 50);
        var endy = Math.floor(e.stageY / 50);
        var path = GameScene.map.astarPath(startx, starty, endx, endy);
        //console.log("startx " + startx + "starty " + starty + "endx " + endx + "endy " + endy);
        path.pop(); //去掉Monster所在的点
        if (path.length > 0 && !this.isFight) {
            CommandList.getInstance().addCommand(new WalkCommand(e.localX, e.localY, path, GameScene.chara));
            CommandList.getInstance().addCommand(new FightCommand(this._linkTaskId));
            CommandList.getInstance().execute();
            this.isFight = true;
        }
        else if (this.isFight) {
            CommandList.getInstance().addCommand(new FightCommand(this._linkTaskId));
            CommandList.getInstance().execute();
            this.count--;
            this._count.graphics.clear();
            this._count.graphics.beginFill(0xff0000, 1.0);
            this._count.graphics.drawRect(0, 0, 50 * (this.count / 9), 5);
            this._count.graphics.endFill();
        }
        //SceneService.getInstance().accept(this._linkTaskId);//移至Command
    };
    p.onAwake = function () {
        this.addChild(this._image);
        this.addChild(this._count);
    };
    p.onSleep = function () {
        this.removeChild(this._image);
        this.removeChild(this._count);
    };
    p.onChange = function (task) {
    };
    return Monster;
}(egret.DisplayObjectContainer));
egret.registerClass(Monster,'Monster',["SceneObserver"]);
var GameScene = (function () {
    function GameScene(main) {
        GameScene.map = new TileMap();
        main.addChild(GameScene.map);
        GameScene.chara = new Character(main);
        main.addChild(GameScene.chara);
        GameScene.chara.idle();
        GameScene.map.initEventListener(GameScene.chara);
    }
    var d = __define,c=GameScene,p=c.prototype;
    GameScene.replaceScene = function (scene) {
        GameScene.scene = scene;
    };
    GameScene.getCurrentScene = function () {
        return GameScene.scene;
    };
    p.moveTo = function (x, y, callback) {
        console.log("开始移动");
        egret.setTimeout(function () {
            console.log("结束移动");
            callback();
        }, this, 500);
    };
    p.stopMove = function (callback) {
        console.log("取消移动");
        callback();
    };
    return GameScene;
}());
egret.registerClass(GameScene,'GameScene');
//# sourceMappingURL=Scene.js.map