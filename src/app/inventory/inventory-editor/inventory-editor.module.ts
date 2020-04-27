import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InventoryEditorPageRoutingModule} from './inventory-editor-routing.module';

import {InventoryEditorPage} from './inventory-editor.page';
import {ImageSliderComponent} from '../shared/components/image-slider/image-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InventoryEditorPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [InventoryEditorPage, ImageSliderComponent]
})
export class InventoryEditorPageModule {
}
