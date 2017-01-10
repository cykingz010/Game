var JewelConfig = [
    { id: "0", name: "红宝石", quality: 1, edge: 3, purity: 0.50, image: "jewel_0_jpg" },
    { id: "1", name: "jewel_1", quality: 2, edge: 4, purity: 0.65, image: "jewel_1_jpg" },
    { id: "2", name: "jewel_2", quality: 3, edge: 5, purity: 0.75, image: "jewel_2_jpg" },
    { id: "3", name: "jewel_3", quality: 4, edge: 8, purity: 0.90, image: "jewel_3_jpg" }
];
var JewelProperty = (function () {
    function JewelProperty(name, quality, edge, purity) {
        this.quality = 0;
        this.edge = 0;
        this.purity = 0;
        this.name = name;
        this.quality = quality;
        this.edge = edge;
        this.purity = purity;
    }
    var d = __define,c=JewelProperty,p=c.prototype;
    return JewelProperty;
}());
egret.registerClass(JewelProperty,'JewelProperty');
var Jewel = (function () {
    function Jewel(id) {
        this.property = new JewelProperty(JewelConfig[id].name, JewelConfig[id].quality, JewelConfig[id].edge, JewelConfig[id].purity);
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            result += this.property.edge * this.property.edge * (this.property.purity + 1) * this.property.quality / 10;
            return result;
        }
    );
    d(p, "name"
        ,function () {
            return this.property.name;
        }
    );
    d(p, "quality"
        ,function () {
            return this.property.quality;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result += this.attack * 5;
            return result;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map