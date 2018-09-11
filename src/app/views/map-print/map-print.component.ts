import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-print',
  templateUrl: './map-print.component.html',
  styleUrls: ['./map-print.component.css']
})
export class MapPrintComponent implements OnInit {

  items = [{
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }];

  constructor() { }

  ngOnInit() {
  }

}
