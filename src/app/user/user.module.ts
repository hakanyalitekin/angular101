import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { IgxButtonModule } from 'igniteui-angular';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: ':id',
    component: UserComponent,
    children: [
      {
        path: 'details',
        component: UserDetailsComponent,
      },
      {
        path: 'role',
        component: UserRoleComponent
      },
      {
        path: '',
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule, IgxButtonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
