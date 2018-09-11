import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline-statistics',
  templateUrl: './pipeline-statistics.component.html',
  styleUrls: ['./pipeline-statistics.component.css']
})
export class PipelineStatisticsComponent implements OnInit {

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
  }];

  constructor() { }

  ngOnInit() {
  }

}
