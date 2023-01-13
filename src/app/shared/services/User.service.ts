import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    jsonInitUser() {
        return {
            login: "NoInfo",
            name: "NoInfo",
            id: 1,
            img: "SinImagen",
            gitUrl: "Github.com",
            followers: 0,
            following: 0
        }
    }
}