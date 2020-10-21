import { Injectable } from '@angular/core';

//added
import {HttpClient} from '@angular/common/http';
import {UserResponse} from './users/user-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http: HttpClient) { }

  getUsers(name: string, page: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(`https://gorest.co.in/public-api/users?name=${name}&page=${page}`);
  }

}
