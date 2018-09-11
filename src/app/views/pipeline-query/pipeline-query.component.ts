import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline-query',
  templateUrl: './pipeline-query.component.html',
  styleUrls: ['./pipeline-query.component.css']
})
export class PipelineQueryComponent implements OnInit {

  items = [{
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
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
