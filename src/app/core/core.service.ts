import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/User.service';

@Injectable({ providedIn: 'root' })
export class CoreService {
    constructor(private http: HttpClient, private _userService: UserService) { }

    private usersFound: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    private userSelected: BehaviorSubject<User> = new BehaviorSubject<User>(this._userService.jsonInitUser());

    usersListObservable(): Observable<User[]> {
        let usersObservableObj: User[] = [];
        return this.http
            .get<User>("https://api.github.com/search/users?q=YOUR_NAME")
            .pipe(
                map((result: any) => {
                    result.items.forEach((e: any) => {
                        let response = { login: e.login, name: e.name, id: e.id, img: e.avatar_url, gitUrl: e.html_url, followers: e.followers, following: e.following  };
                        usersObservableObj.push(response)
                    });
                    return usersObservableObj;
                })
            );
    }

    getUsersEspecificObservable(loginUser: string): Observable<User> {
        let usersObservableObj: User = this._userService.jsonInitUser();
        return this.http
            .get<User>(`https://api.github.com/users/${loginUser}`)
            .pipe(
                map((result: any) => {
                    usersObservableObj.login = result.login;
                    usersObservableObj.id = result.id;
                    usersObservableObj.img = result.avatar_url;

                    usersObservableObj.login = result.login, 
                    usersObservableObj.name = result.name, 
                    usersObservableObj.id = result.id, 
                    usersObservableObj.img = result.avatar_url, 
                    usersObservableObj.gitUrl = result.html_url, 
                    usersObservableObj.followers = result.followers, 
                    usersObservableObj.following = result.following

                    return usersObservableObj;
                })
            );
    }

    get getUsersFoundSearch() {
        return this.usersFound.asObservable();
    }

    set setUsersFoundSearch(dataFound: any) {
        this.usersFound.next(dataFound);
    }

    get getUserSelected() {
        return this.userSelected.asObservable();
    }

    set setUserSelected(user: any) {
        this.userSelected.next(user);
    }

}