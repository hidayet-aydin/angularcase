import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  clockTime: string;
  
  secondsCounter = interval(1000);
  subscription = this.secondsCounter.subscribe(n => {
    // console.log(`It's been ${n + 1} seconds since subscribing!`)
    let now = moment();
    this.clockTime = now.format('DD/MM/YYYY hh:mm:ss');
  });

  ngOnInit(): void {
  }

}
