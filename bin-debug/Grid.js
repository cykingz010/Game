var Grid = (function () {
    function Grid(numCols, numRows) {
        this._points = [];
        this._numCols = numCols;
        this._numRows = numRows;
        this._points = new Array();
        for (var i = 0; i < this._numCols; i++) {
            this._points[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._points[i][j] = new Point(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.getPoint = function (x, y) {
        return this._points[x][y];
    };
    p.setEndPoint = function (x, y) {
        this._endPoint = this._points[x][y];
    };
    p.setStartPoint = function (x, y) {
        this._startPoint = this._points[x][y];
    };
    p.setWalkable = function (x, y, value) {
        this._points[x][y].walkable = value;
    };
    p.getStartPoint = function () {
        return this._startPoint;
    };
    p.getEndPoint = function () {
        return this._endPoint;
    };
    p.getNumCols = function () {
        return this._numCols;
    };
    p.getNumRows = function () {
        return this._numRows;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=Grid.js.map