"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TXNS = [
    { id: 1, name: 'Transaction 1' },
    { id: 2, name: 'Transaction 2' },
    { id: 3, name: 'Transaction 3' },
    { id: 4, name: 'Transaction 4' },
    { id: 5, name: 'Transaction 5' },
    { id: 6, name: 'Transaction 6' },
    { id: 7, name: 'Transaction 7' },
    { id: 8, name: 'Transaction 8' },
    { id: 9, name: 'Transaction 9' },
    { id: 10, name: 'Transaction 10' }
];
//These need to be kept together
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Stockchain';
        this.transaction = {
            id: 1,
            name: 'Transaction 1'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{transaction.name}} details</h2>\n        <div><label>id: </label>{{transaction.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"transaction.name\" placeholder=\"TXN_Name\"/>\n        </div>   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Transaction = (function () {
    function Transaction() {
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=app.component.js.map