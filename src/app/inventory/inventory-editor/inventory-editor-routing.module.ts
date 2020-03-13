import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryEditorPage } from './inventory-editor.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryEditorPageRoutingModule {}
