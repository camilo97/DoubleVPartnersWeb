import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core.service'
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faPeopleGroup, faPeopleArrowsLeftRight  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  faGithub = faGithub;
  faPeopleGroup = faPeopleGroup;
  faPeopleArrowsLeftRight = faPeopleArrowsLeftRight;
  data$: Observable<User>;

  constructor(private _coreService: CoreService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getUser() {
    
  }

  getDataUser(){
    this._route.params.subscribe((params: any) => {
      this.data$ = this._coreService.getUsersEspecificObservable(params.login);
    });
  }

}
