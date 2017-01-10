var Point = (function () {
    function Point(x, y) {
        this.walkable = true;
        this.x = x;
        this.y = y;
        this.walkable = config[x + y * 10].walkable; //通过config数组获取walkable
        //console.log(this.walkable);
    }
    var d = __define,c=Point,p=c.prototype;
    return Point;
}());
egret.registerClass(Point,'Point');
//# sourceMappingURL=Point.js.map