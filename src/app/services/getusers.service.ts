import { Injectable } from '@angular/core';

//added
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './users/user-response';
import { PostResponse } from './posts/post-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(`https://gorest.co.in/public-api/users?id=${userId}`);
  }

  getUsers(name: string, page: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(`https://gorest.co.in/public-api/users?name=${name}&page=${page}`);
  }

  getPosts(userId: string): Observable<PostResponse>{
    return this.http.get<PostResponse>(`https://gorest.co.in/public-api/users/${userId}/posts`);
  }

}
