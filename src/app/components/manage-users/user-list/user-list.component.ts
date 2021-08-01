import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './../../../services/http-service.service';
import { AjaxMethodName } from './../../../core/constants/ajaxMethod';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserLoaded, getUserLoading, getUsers, RootReducerState } from 'src/reducers';
import { UserListRequestAction, UserListSuccessAction, UserListDeleteAction } from 'src/actions/user-action';
import * as _ from 'lodash';
import { timer, combineLatest } from 'rxjs';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userListArray: any = [];


  constructor(
    private store: Store<RootReducerState>,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    const usersData$ = this.userService.getUsersFromService()
    usersData$.subscribe(data => {
      this.userListArray = data;
      // console.log(data)
    })
  }

  editUser(selectedUser) {
    this.router.navigate([`users/${selectedUser.id}`])
  }

  deleteUser(index, selectedUser) {
    this.store.dispatch(new UserListDeleteAction({ id: selectedUser.id }));
  }

}


