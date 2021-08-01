import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';
import { UserListRequestAction, UserListSuccessAction } from 'src/actions/user-action';
import { RootReducerState, getUserLoading, getUserLoaded, getUsers } from 'src/reducers';
import { AjaxMethodName } from '../core/constants/ajaxMethod';
import { HttpServiceService } from './http-service.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store<RootReducerState>,
    private httpService: HttpServiceService
  ) { }


  getUsersFromService() {

    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const users$ = this.store.select(getUsers);
    combineLatest([loading$, loaded$]).subscribe(data => {
      if (!data[0] && !data[1]) {
        this.store.dispatch(new UserListRequestAction())
        this.httpService.getUsersData(AjaxMethodName.getUsersList).subscribe((response: any) => {
          if (response && response.data && response.data.length) {
            const clone = _.cloneDeep(response.data);
            this.store.dispatch(new UserListSuccessAction({ data: clone }))
          }
        })
      }
    })
    return users$;
  }
}
