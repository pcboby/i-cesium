import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-operation',
  templateUrl: './map-operation.component.html',
  styleUrls: ['./map-operation.component.css']
})
export class MapOperationComponent implements OnInit {

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
