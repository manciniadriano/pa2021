var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Impiegato = /** @class */ (function () {
    function Impiegato() {
    }
    Impiegato.prototype.getCognome = function () {
        return this.cognome;
    };
    Impiegato.prototype.setCognome = function (cognome) {
        this.cognome = cognome;
    };
    return Impiegato;
}());
var Employer = /** @class */ (function () {
    function Employer() {
        this.lastName = null;
    }
    Employer.prototype.getLastName = function () {
        return this.lastName;
    };
    Employer.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Employer;
}());
var AdattatoreEmployer = /** @class */ (function (_super) {
    __extends(AdattatoreEmployer, _super);
    function AdattatoreEmployer(employer) {
        var _this = _super.call(this) || this;
        _this.employer = employer;
        return _this;
    }
    AdattatoreEmployer.prototype.getCognome = function () {
        return this.employer.getLastName();
    };
    AdattatoreEmployer.prototype.setCognome = function (cognome) {
        this.employer.setLastName(cognome);
    };
    return AdattatoreEmployer;
}(Impiegato));
var impiegato = new Impiegato();
impiegato.setCognome("Rossi");
console.log("Impiegato: " + impiegato.getCognome());
var adattatoreEmployer = new AdattatoreEmployer(new Employer());
adattatoreEmployer.setCognome("Verdi");
console.log("AdattatoreEmployer: " + adattatoreEmployer.getCognome());
