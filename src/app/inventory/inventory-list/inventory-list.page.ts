import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.page.html',
    styleUrls: ['./inventory-list.page.scss'],
})
export class InventoryListPage implements OnInit {

    constructor(private navController: NavController) {
    }

    ngOnInit() {
    }

    public addInventory() {
      this.navController.navigateForward('/tabs/inventory/create');
    }

}
