import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { CoreService } from '../../core.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user-found',
  templateUrl: './list-user-found.component.html',
  styleUrls: ['./list-user-found.component.scss']
})

export class ListUserFoundComponent implements OnInit {

  data$: Observable<User[]>;

  constructor(private _coreService: CoreService, private router: Router) {
    this.data$ = _coreService.getUsersFoundSearch;
  }


  ngOnInit(): void {
  }


}
