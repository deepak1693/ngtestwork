import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxMethodName } from 'src/app/core/constants/ajaxMethod';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string;
  userData: any;

  constructor(
    private httpService: HttpServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserData(this.id);
  }

  getUserData(userId) {
    const path = AjaxMethodName.getUsersList + `/${userId}`
    this.httpService.getUsersData(path).subscribe((response: any) => {
      if (response && response.data) {
        this.userData = response.data;
      }
    })
  }

}
