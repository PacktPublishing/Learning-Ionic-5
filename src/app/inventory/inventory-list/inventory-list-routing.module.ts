import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryListPage } from './inventory-list.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryListPageRoutingModule {}
