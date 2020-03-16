import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'inventory',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inventory/inventory-list/inventory-list.module').then(m => m.InventoryListPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () =>
                import('../inventory/inventory-editor/inventory-editor.module').then(m => m.InventoryEditorPageModule)
          },
          {
            path: 'create',
            loadChildren: () =>
                import('../inventory/inventory-editor/inventory-editor.module').then(m => m.InventoryEditorPageModule)
          }
        ]
      },
      {
        path: 'user-account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../user-account/user-account.module').then(m => m.UserAccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
