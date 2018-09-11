import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-position',
  templateUrl: './map-position.component.html',
  styleUrls: ['./map-position.component.css']
})
export class MapPositionComponent implements OnInit {

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
