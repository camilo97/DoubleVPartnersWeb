import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CoreRoutingModule } from './core-routing.module';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ListUserFoundComponent } from './components/list-user-found/list-user-found.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent, ListUsersComponent, DetailUserComponent, SearchUserComponent, ListUserFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
