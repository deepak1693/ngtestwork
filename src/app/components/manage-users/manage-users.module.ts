import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ManageUsersComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    HttpClientModule
  ],
  providers:[
  ]
})
export class ManageUsersModule { }
