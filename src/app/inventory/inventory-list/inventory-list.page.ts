import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {InventoryItem} from '../../core/models/inventory.model';
import {InventoryService} from '../shared/services/inventory.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.page.html',
    styleUrls: ['./inventory-list.page.scss'],
})
export class InventoryListPage implements OnInit, OnDestroy {

    public inventoryList: Array<InventoryItem> = [];

    private inventoryListSub: Subscription;

    private inventoryFetchingSub: Subscription;

    public showLoading = false;

    public searchTerm: '';

    constructor(private navController: NavController,
                private inventoryService: InventoryService,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.inventoryListSub = this.inventoryService.inventoryListUpdate.subscribe(value => {
            this.inventoryList = value;
        });

        this.inventoryFetchingSub = this.inventoryService.fetching.subscribe(value => {
            this.showLoading = value;
        });

        this.inventoryService.loadInventoryList();
    }

    ngOnDestroy() {
        this.inventoryListSub.unsubscribe();
        this.inventoryFetchingSub.unsubscribe();
    }

    public addInventory() {
        this.navController.navigateForward('/tabs/inventory/create');
    }

    public handleInventoryOpen(inventory: InventoryItem) {
        this.navController.navigateForward('/tabs/inventory/edit/' + inventory._id);
    }

    public async handleInventoryDelete(inventory: InventoryItem) {
        const alert = await this.alertController.create({
            header: 'Delete ' + inventory.title + ' ?',
            message: '<strong>This cannot be undone!</strong>',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: (blah) => {
                        console.log('Canceled');
                    }
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.deleteInventoryItem(inventory);
                    }
                }
            ]
        });

        await alert.present();
    }

    public handleInventoryShare(inventory: InventoryItem) {
        // TODO: Implement native share
    }

    public doRefresh(event: any) {
        event.target.complete();
        this.inventoryService.refreshData();
    }

    private deleteInventoryItem(item: InventoryItem) {
        this.inventoryService.deleteInventory(item);
    }

}
