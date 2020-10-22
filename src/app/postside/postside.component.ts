import { Component, OnInit } from '@angular/core';

// added
import { ActivatedRoute } from '@angular/router';
import {GetusersService} from '../services/getusers.service';

@Component({
  selector: 'app-postside',
  templateUrl: './postside.component.html',
  styleUrls: ['./postside.component.css']
})
export class PostsideComponent implements OnInit {

  constructor(private service: GetusersService, private router: ActivatedRoute) { }

  userId: string;
  userName: string;
  posts: {code: number,
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
        }
    },
    data: {
        id: number;
        user_id: number;
        title: string;
        body: string;
        created_at: Date;
        updated_at: Date;
    }[]};
    user_info: {code: number,
      meta: {
          pagination: {
              total: number;
              pages: number;
              page: number;
              limit: number;
          }
      },
      data: {
          id: number;
          name: string;
          email: string;
          gender: string;
          status: string;
          created_at: Date;
          updated_at: Date;
      }[]};

  ngOnInit(): void {
    this.userId = this.router.snapshot.queryParamMap.get('userId');

    this.service.getUserInfo(String(this.userId)).subscribe(res => {
      this.user_info = res;
      this.userName = this.user_info.data[0].name;
    });

    this.service.getPosts(String(this.userId)).subscribe(res => {
      this.posts = res;
    });
  }

}
