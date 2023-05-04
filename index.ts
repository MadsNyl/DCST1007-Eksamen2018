class Land{
    private _navn: string;
    private _areal: number;
    private _folketall: number;
    private _toppdomene: string;

    constructor(navn: string, areal: number, folketall: number, toppdomene: string) {
        this._navn = navn;
        this._areal = areal;
        this._folketall = folketall;
        this._toppdomene = toppdomene;
    }

    get navn(): string { return this._navn; }
    get areal(): number { return this._areal; }
    get folektall(): number { return this._folketall; }
    get toppdomene(): string { return this._toppdomene; }

    befolkningstetthet(): number { return this._folketall / this._areal; }

    toString(): string { return `${this._navn} (.${this._toppdomene}) har ${this._folketall} og har et areal på ${this._areal} km2.`; }
}

const norge = new Land("Norge", 323802, 5320045, "no");
const sverige = new Land("Sverige", 450295, 9960487, "se");
const russland = new Land("Russland", 17098242, 142257519, "ru");
const kina = new Land("Kina", 9596960, 1379302771, "cn");

console.log(norge.toString());
console.log(sverige.toString());
console.log(russland.toString());
console.log(kina.toString());

const finnLand = (domene: string): string => {
    
    switch (domene) {
        case "no":return norge.toString();
        
        case "se": return sverige.toString();

        case "ru": return russland.toString();
        
        case "cn": return kina.toString();
        
        default: return "Dette domene tilhører ingen land."
    }
}

const land = finnLand("no");
console.log(land);