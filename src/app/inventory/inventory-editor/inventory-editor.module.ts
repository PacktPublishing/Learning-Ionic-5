import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryEditorPageRoutingModule } from './inventory-editor-routing.module';

import { InventoryEditorPage } from './inventory-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryEditorPageRoutingModule
  ],
  declarations: [InventoryEditorPage]
})
export class InventoryEditorPageModule {}
