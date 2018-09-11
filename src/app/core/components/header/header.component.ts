import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navs = [{
    name: '首页',
    link: '/dashboard',
    icon: 'fa fa-desktop'
  }, {
    name: '图层控制',
    link: '/map/layerControl',
    icon: 'fa fa-paper-plane'
  }, {
    name: '地图操作',
    link: '/map/mapOperation',
    icon: 'fa fa-map'
  }, {
    name: '地图定位',
    link: '/map/mapPosition',
    icon: 'fa fa-map-marker'
  }, {
    name: '管线查询',
    link: '/map/pipelineQuery',
    icon: 'fa fa-search'
  }, {
    name: '管线统计',
    link: '/map/pipelineStatistics',
    icon: 'fa fa-ioxhost'
  }, {
    name: '综合分析',
    link: '/map/comprehensiveAnalysis',
    icon: 'fa fa-area-chart'
  }, {
    name: '房屋管理',
    link: '/map/housingManagement',
    icon: 'fa fa-home'
  }, {
    name: '打印出图',
    link: '/map/mapPrint',
    icon: 'fa fa-print'
  }, {
    name: '系统管理',
    link: '/systemManagement',
    icon: 'fa fa-cog'
  }];

  constructor() {}

  ngOnInit() {}

}
