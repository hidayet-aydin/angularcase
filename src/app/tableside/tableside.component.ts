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
  
  constructor(private service: GetusersService) {
    // this.service.getUsers(this.filtername, this.page).subscribe(res => console.log(res));
  }

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
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.loadUsers();
  }
 
  open_link(event) {
      var target = event.target;
      var idAttr = target.attributes.id;
      var value = idAttr.nodeValue;
      var url = "/posts?userId="+String(value);
      window.open(url, "_blank");
  }

}
