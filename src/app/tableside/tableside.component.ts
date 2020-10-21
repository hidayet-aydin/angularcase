import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

//added
import {GetusersService} from '../services/getusers.service';

@Component({
  selector: 'app-tableside',
  templateUrl: './tableside.component.html',
  styleUrls: ['./tableside.component.css']
})
export class TablesideComponent implements OnInit {
  
  filtername = "";
  page = 1;
  maxSize = 7;
  count_pages: number;
  users: {code: number,
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
  
  loadUsers(rst: boolean = false){
    if (rst) {this.page = 1;}
    this.service.getUsers(this.filtername, String(this.page)).subscribe(res => {
      this.users = res;
      this.count_pages = this.users.meta.pagination.pages * 20;
      // this.curr_pages = this.users.meta.pagination.page;
    });
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.loadUsers();
  }

  constructor(private service: GetusersService) {
    // this.service.getUsers(this.filtername, this.page).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.loadUsers();
  }
 

}
