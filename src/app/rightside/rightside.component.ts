import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open_link(event) {
    var target = event.target;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    var url = "/posts?userId="+String(value);
    window.open(url, "_blank");
  }

}
