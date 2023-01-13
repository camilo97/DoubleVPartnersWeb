import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list-users',
        component: ListUsersComponent,
      },
      {
        path: 'detail-user/:login',
        component: DetailUserComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }