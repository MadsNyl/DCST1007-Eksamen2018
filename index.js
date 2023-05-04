var Land = /** @class */ (function () {
    function Land(navn, areal, folketall, toppdomene) {
        this._navn = navn;
        this._areal = areal;
        this._folketall = folketall;
        this._toppdomene = toppdomene;
    }
    Object.defineProperty(Land.prototype, "navn", {
        get: function () { return this._navn; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Land.prototype, "areal", {
        get: function () { return this._areal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Land.prototype, "folektall", {
        get: function () { return this._folketall; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Land.prototype, "toppdomene", {
        get: function () { return this._toppdomene; },
        enumerable: false,
        configurable: true
    });
    Land.prototype.befolkningstetthet = function () { return this._folketall / this._areal; };
    Land.prototype.toString = function () { return "".concat(this._navn, " (.").concat(this._toppdomene, ") har ").concat(this._folketall, " og har et areal p\u00E5 ").concat(this._areal, " km2."); };
    return Land;
}());
var norge = new Land("Norge", 323802, 5320045, "no");
var sverige = new Land("Sverige", 450295, 9960487, "se");
var russland = new Land("Russland", 17098242, 142257519, "ru");
var kina = new Land("Kina", 9596960, 1379302771, "cn");
console.log(norge.toString());
console.log(sverige.toString());
console.log(russland.toString());
console.log(kina.toString());
var finnLand = function (domene) {
    switch (domene) {
        case "no": return norge.toString();
        case "se": return sverige.toString();
        case "ru": return russland.toString();
        case "cn": return kina.toString();
        default: return "Dette domene tilhører ingen land.";
    }
};
var land = finnLand("no");
console.log(land);
