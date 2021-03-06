var NPC = (function (_super) {
    __extends(NPC, _super);
    //private dialog: DialogPanel = new DialogPanel();
    function NPC(id, name, bitmap, emoji, tachie, x, y) {
        var _this = this;
        _super.call(this);
        this._bitmap = new egret.Bitmap;
        this._emoji = new egret.Bitmap;
        this._tachie = new egret.Bitmap;
        this._chara = new egret.Bitmap;
        this.npcRule = function () {
            return _this._id;
        };
        this._id = id;
        this._name = name;
        this._bitmap.texture = RES.getRes(bitmap);
        this._tachie.texture = RES.getRes(tachie);
        this.changeEmoji(emoji);
        this.x = x;
        this.y = y;
        this._bitmap.x = 0;
        this._bitmap.y = 0;
        this._bitmap.anchorOffsetX = this._bitmap.width / 2;
        this._bitmap.anchorOffsetY = this._bitmap.height / 2;
        this._tachie.anchorOffsetX = this._tachie.width / 2;
        this._tachie.anchorOffsetY = this._tachie.height / 2;
        this._emoji.anchorOffsetX = this._emoji.width / 2;
        this._emoji.anchorOffsetY = this._emoji.height / 2;
        this._emoji.x = this._bitmap.x + this._bitmap.width / 2 - 5;
        this._emoji.y = this._bitmap.y - (this._bitmap.height + this._emoji.height) / 4;
        this._taskList = TaskService.getInstance().getTaskByCustomRole(this.npcRule);
        this.addChild(this._bitmap);
        this.addChild(this._emoji);
        //this.addChild(this._tachie);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.touchEnabled = true;
    }
    var d = __define,c=NPC,p=c.prototype;
    d(p, "id"
        ,function () {
            return this._id;
        }
    );
    p.onChange = function (task) {
        if (this._taskList.length > 0) {
            for (var i = 0; i < this._taskList.length; i++) {
                if (task == this._taskList[i]) {
                    //console.log("accept task fromNpcId:" + task.fromNpcId + " status:" + task.status);
                    //console.log("accept task fromNpcId:" + this._id + " status:" + TaskStatus.DURING);
                    this._taskList[i].status = task.status;
                    if (task.fromNpcId == this._id && task.status == TaskStatus.UNACCEPTABLE) {
                        this.changeEmoji(EmojiStatus.EMPTY);
                    }
                    else if (task.toNpcId == this._id && task.status == TaskStatus.DURING || task.status == TaskStatus.ACCEPTABLE || task.status == TaskStatus.CAN_ACCEPT) {
                        this.changeEmoji(EmojiStatus.QUESTION);
                    }
                    else if (task.toNpcId == this._id && task.status == TaskStatus.CAN_SUBMIT) {
                        this.changeEmoji(EmojiStatus.EXCLAMATION);
                    }
                    else if (task.toNpcId == this._id && task.status == TaskStatus.SUBMITTED) {
                        this.changeEmoji(EmojiStatus.EMPTY);
                    }
                }
            }
        }
    };
    p.changeEmoji = function (status) {
        switch (status) {
            case EmojiStatus.EMPTY:
                this._emoji.texture = RES.getRes("empty_png");
                break;
            case EmojiStatus.QUESTION:
                this._emoji.texture = RES.getRes("question_png");
                break;
            case EmojiStatus.EXCLAMATION:
                this._emoji.texture = RES.getRes("exclamation_png");
                break;
            default:
                break;
        }
    };
    p.onClick = function (e) {
        var startx = Math.floor((GameScene.chara._body.x) / 50);
        var starty = Math.floor(GameScene.chara._body.y / 50);
        var endx = Math.floor(e.stageX / 50);
        var endy = Math.floor(e.stageY / 50);
        var path = GameScene.map.astarPath(startx, starty, endx, endy);
        console.log("target:npc startx " + startx + "starty " + starty + "endx " + endx + "endy " + endy);
        path.pop(); //去掉NPC所在的点
        if (path.length > 1) {
            if (startx != endx || starty != endy) {
                if (!CommandList.getInstance().currentCommand) {
                    CommandList.getInstance().addCommand(new WalkCommand(e.stageX, e.stageY, path, GameScene.chara));
                    CommandList.getInstance().addCommand(new TalkCommand(this));
                    CommandList.getInstance().execute();
                }
            }
        }
        //for (var i: number = 0; i < this._taskList.length; i++) {
        //    console.log("taskId: " + this._taskList[i].id + " status: " + this._taskList[i].status);
        //    if (this._taskList[i].status == TaskStatus.ACCEPTABLE) {
        //        TaskService.getInstance().accept(this._taskList[i].id);
        //        CommandList.getInstance().addCommand(new TalkCommand(this._taskList[i].id));
        //        CommandList.getInstance().execute();
        //        //NPCManager.getInstance().openDialog(this._taskList[i].id);
        //       break;
        //    }
        //}
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
var NPCManager = (function () {
    function NPCManager() {
        this.NPCList = [];
        this.dialog = new DialogPanel();
    }
    var d = __define,c=NPCManager,p=c.prototype;
    NPCManager.getInstance = function () {
        if (NPCManager.instance == null) {
            NPCManager.instance = new NPCManager;
        }
        return NPCManager.instance;
    };
    p.init = function () {
        //this.dialog = new DialogPanel();
        var data = RES.getRes("gameconfig_json");
        for (var i = 0; i < data.npcs.length; i++) {
            var npc = new NPC(data.npcs[i].id, data.npcs[i].name, data.npcs[i].bitmap, data.npcs[i].emoji, data.npcs[i].tachie, data.npcs[i].x, data.npcs[i].y);
            this.NPCList.push(npc);
        }
    };
    p.commandTalk = function (taskId, callback) {
        this.openDialog(taskId);
        this.callback = callback;
    };
    p.openDialog = function (taskId) {
        this.dialog.onAwake(taskId);
        console.log("NPCManager onClick");
    };
    p.changeDialog = function () {
        this.dialog.onChange();
    };
    p.closeDialog = function () {
        this.dialog.onSleep();
        this.callback();
    };
    return NPCManager;
}());
egret.registerClass(NPCManager,'NPCManager');
var EmojiStatus;
(function (EmojiStatus) {
    EmojiStatus[EmojiStatus["EMPTY"] = 0] = "EMPTY";
    EmojiStatus[EmojiStatus["QUESTION"] = 1] = "QUESTION";
    EmojiStatus[EmojiStatus["EXCLAMATION"] = 2] = "EXCLAMATION";
})(EmojiStatus || (EmojiStatus = {}));
//# sourceMappingURL=NPC.js.map