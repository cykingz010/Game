var BagPanel = (function (_super) {
    __extends(BagPanel, _super);
    function BagPanel() {
        _super.call(this);
        this.bagBg = new egret.Bitmap;
        this.items = [new egret.TextField];
        this.bagBg.texture = RES.getRes("bg2_jpg");
        this.bagBg.x = 0;
        this.bagBg.y = 300;
        this.bagBg.width = 200;
        this.bagBg.height = 100;
        this.addChild(this.bagBg);
        if (this.items.length > 0) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].text = "血腥砍刀";
                this.items[i].x = 0;
                this.items[i].y = 300 + i * 20;
                this.items[i].size = 14;
                this.items[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItem, this);
                this.items[i].touchEnabled = true;
                this.addChild(this.items[i]);
            }
        }
    }
    var d = __define,c=BagPanel,p=c.prototype;
    p.addItem = function (e) {
        if (e.target.text == "佛丁二号") {
        }
    };
    return BagPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(BagPanel,'BagPanel');
var Bag = (function (_super) {
    __extends(Bag, _super);
    function Bag() {
        _super.apply(this, arguments);
        this.switchButton = new egret.Bitmap;
        this.switch = new egret.TextField;
        this.isShow = false;
        this.bagBg = new egret.Bitmap;
        this.items = [];
    }
    var d = __define,c=Bag,p=c.prototype;
    Bag.getInstance = function () {
        if (Bag.instance == null) {
            Bag.instance = new Bag;
        }
        return Bag.instance;
    };
    p.initBag = function () {
        this.initPanel();
        console.log("init bag");
        //this.initPanel();
        this.switchButton.texture = RES.getRes("button_jpg");
        this.switchButton.x = 400;
        this.switchButton.y = 475;
        this.switchButton.width = 100;
        this.switchButton.height = 25;
        this.addChild(this.switchButton);
        this.switch.text = "打开背包";
        this.switch.size = 14;
        this.switch.fontFamily = "微软雅黑";
        this.switch.anchorOffsetX = this.switch.width / 2;
        this.switch.anchorOffsetY = this.switch.height / 2;
        this.switch.x = 450;
        this.switch.y = 487.5;
        this.addChild(this.switch);
        this.bagBg.texture = RES.getRes("panelBg_png");
        this.bagBg.x = 0;
        this.bagBg.y = 300;
        this.bagBg.width = 200;
        this.bagBg.height = 100;
        this.addChild(this.bagBg);
        this.bagBg.visible = false;
        if (this.items.length > 0) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].text = "";
                this.items[i].x = 0;
                this.items[i].y = 300 + i * 20;
                this.items[i].size = 14;
                this.items[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItemToHero, this);
                this.items[i].touchEnabled = true;
                this.addChild(this.items[i]);
                this.items[i].visible = false;
            }
        }
        this.switchButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkStatus, this);
        this.switchButton.touchEnabled = true;
    };
    p.initPanel = function () {
        console.log("initPanel");
        this.player = new Player();
        //console.log("英雄数量："+this.player.heroes.length);
        this.hero = new Hero(0);
        var weapon = new Weapon(0);
        var weapon2 = new Weapon(1);
        //var Ruby = new Jewel(0);
        //Ashbringer.addJewel(Ruby);
        this.hero.addWeapon(weapon);
        //console.log("武器数量："+this.hero.weapons.length);
        this.hero.addWeapon(weapon2);
        this.player.addHero(this.hero);
        this.playerPanel = new PlayerPanel(this.stage, this.player);
        //this.playerPanel.addWeapon();
        this.playerPanel.setPanel();
        //console.log("武器数量："+this.hero.weapons.length);
        this.addChild(this.playerPanel);
        this.playerPanel.visible = false;
    };
    p.checkStatus = function () {
        if (!this.isShow) {
            this.showPanel();
            this.switch.text = "关闭背包";
            this.isShow = true;
        }
        else {
            this.hidePanel();
            this.switch.text = "打开背包";
            this.isShow = false;
        }
    };
    p.showPanel = function () {
        this.playerPanel.visible = true;
        this.bagBg.visible = true;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].visible = true;
        }
        //this.addChild(this.BagPanel);
    };
    p.hidePanel = function () {
        this.playerPanel.visible = false;
        this.bagBg.visible = false;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].visible = false;
        }
        //this.removeChild(this.BagPanel);
    };
    p.addItemToHero = function (e) {
        console.log("add");
        if (e.target.text == "血腥砍刀") {
            console.log("addsuccess");
            this.player.heroesInTeam.addWeapon(new Weapon(2));
            this.playerPanel.updatePlayer(this.player);
            this.playerPanel.setPanel();
            e.target.text = null;
        }
    };
    p.addItemToBag = function (item) {
        this.items.push(new egret.TextField());
        this.items[this.items.length - 1].text = item;
        this.items[this.items.length - 1].size = 16;
        this.items[this.items.length - 1].x = 0;
        this.items[this.items.length - 1].y = 300 + (this.items.length - 1) * 20;
        this.items[this.items.length - 1].addEventListener(egret.TouchEvent.TOUCH_TAP, this.addItemToHero, this);
        this.items[this.items.length - 1].touchEnabled = true;
        this.addChild(this.items[this.items.length - 1]);
        this.items[this.items.length - 1].visible = false;
    };
    return Bag;
}(egret.DisplayObjectContainer));
egret.registerClass(Bag,'Bag');
//# sourceMappingURL=Bag.js.map