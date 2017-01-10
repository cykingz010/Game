var HeroConfig = [
    { id: "0", name: "Kiriko", quality: 1, level: 5, strength: 10 }
];
var HeroProperty = (function (_super) {
    __extends(HeroProperty, _super);
    function HeroProperty(id, name, quality, level, strength) {
        _super.call(this);
        this.quality = 1;
        this.level = 1;
        this.strength = 5;
        this.configId = id;
        this.name = name;
        this.quality = quality;
        this.level = level;
        this.strength = strength;
    }
    var d = __define,c=HeroProperty,p=c.prototype;
    return HeroProperty;
}(Property));
egret.registerClass(HeroProperty,'HeroProperty');
var Hero = (function () {
    function Hero(id) {
        this.isInTeam = true;
        this.weapons = [];
        if (id < WeaponConfig.length) {
            this.property = new HeroProperty(HeroConfig[id].id, HeroConfig[id].name, HeroConfig[id].quality, HeroConfig[id].level, HeroConfig[id].strength);
        }
        else {
            console.log("this hero does not exist");
        }
    }
    var d = __define,c=Hero,p=c.prototype;
    p.addWeapon = function (w) {
        this.weapons.push(w);
    };
    //使用这个方法不知为何拿不到武器
    //getWeapon(){     
    //    return this.weapons;
    //}
    p.setInTeamStatus = function (status) {
        this.isInTeam = status;
    };
    d(p, "maxHp"
        //@Cache
        ,function () {
            return this.property.level * 100 * this.property.quality;
        }
    );
    d(p, "name"
        ,function () {
            return this.property.name;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.weapons.forEach(function (e) { return result += e.attack; });
            result += this.property.level * 1.5 * this.property.strength * this.property.quality;
            return result;
        }
    );
    d(p, "level"
        ,function () {
            return this.property.level;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.weapons.forEach(function (e) { return result += e.attack; });
            result += this.attack * 5;
            result += this.maxHp * 10;
            return result;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map