import { Component } from '@angular/core';

const TXNS: Transaction[] = [
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
@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <h2>{{transaction.name}} details</h2>
        <div><label>id: </label>{{transaction.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="transaction.name" placeholder="TXN_Name"/>
        </div>   `
})
export class AppComponent {
    title = 'Stockchain';
    transaction: Transaction = {
        id: 1,
        name: 'Transaction 1'
    }
}

export class Transaction {
    id: number;
    name: string;
}
