import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryListPageRoutingModule } from './inventory-list-routing.module';

import { InventoryListPage } from './inventory-list.page';
import {InventoryItemCardComponent} from '../shared/components/inventory-item-card/inventory-item-card.component';
import {TextSearchPipe} from '../shared/pipes/text-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryListPageRoutingModule
  ],
  declarations: [InventoryListPage, InventoryItemCardComponent, TextSearchPipe]
})
export class InventoryListPageModule {}
