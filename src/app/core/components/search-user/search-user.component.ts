import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from '../../core.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})

export class SearchUserComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private _coreService: CoreService, private _notificationService: NotificationService) { }
  faSearchengin = faSearchengin;

  form: FormGroup;
  listResultsFilter: any = [];
  listResultsOriginal: any = [];

  listUsers$: Observable<User[]>;

  ngOnInit(): void {
    this.createFormSearch();
    this.getUsers();
  }

  private createFormSearch() {
    this.form = this.fb.group({
      SEARCH: [null, Validators.required]
    });
  }

  getUsers() {
    if (this.listUsers$ == null) {
      this.listUsers$ = this._coreService.usersListObservable();
      this.listUsers$.subscribe((res: any) => {
        this.listResultsOriginal = res;
      });
    }
  }

  SearchUsers() {
    let resultFilter = this.listResultsOriginal.filter((f: any) => f.login.toLowerCase().indexOf(this.form.value.SEARCH) >= 0);
    resultFilter.forEach((e: any, idx: number) => {
      if(idx <= 9){
        this.listResultsFilter.push(e)
      }
    });
    this._coreService.setUsersFoundSearch = this.listResultsFilter;
  }

}
