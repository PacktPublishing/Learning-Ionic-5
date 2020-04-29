import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InventoryItem} from '../../models/inventory.model';

@Component({
    selector: 'app-inventory-item-card',
    templateUrl: './inventory-item-card.component.html',
    styleUrls: ['./inventory-item-card.component.scss'],
})
export class InventoryItemCardComponent implements OnInit {

    @Input() inventory: InventoryItem;

    @Output() openEvent = new EventEmitter<InventoryItem>();
    @Output() deleteEvent = new EventEmitter<InventoryItem>();
    @Output() shareEvent = new EventEmitter<InventoryItem>();

    constructor() {
    }

    ngOnInit() {
    }

    public emitInventoryOpen() {
        this.openEvent.emit(this.inventory);
    }

    public emitInventoryDelete() {
        this.deleteEvent.emit(this.inventory);
    }

    public editInventoryShare() {
        this.shareEvent.emit(this.inventory);
    }
}
