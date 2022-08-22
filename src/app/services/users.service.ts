import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Users";

  getAllUsers(){
    return this.http.get<Users[]>(this.url);
  }

  /*delete(id: string): Observable<Object>{
    return this.http.delete<Object>();
  }*/
}
