import {
  LayoutComponent, LayoutMapComponent
} from './core/components';
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '', // 默认
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'error', // 出错
    loadChildren: './views/error/error.module#ErrorModule'
  },
  {
    path: 'login', // 登录
    loadChildren: './views/login/login.module#LoginModule'
  },
  {
    path: 'regist', // 注册
    loadChildren: './views/regist/regist.module#RegistModule'
  },
  {
    path: 'dashboard', // 首页
    component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    }]
  },
  {
    path: 'map',
    component: LayoutMapComponent,
    children: [{
      path: '',
      redirectTo: 'layerControl',
      pathMatch: 'full'
    }, {
      path: 'layerControl', // 图层控制
      loadChildren: './views/layer-control/layer-control.module#LayerControlModule'
    }, {
      path: 'mapOperation', // 地图操作
      loadChildren: './views/map-operation/map-operation.module#MapOperationModule'
    }, {
      path: 'mapPosition', // 地图定位
      loadChildren: './views/map-position/map-position.module#MapPositionModule'
    }, {
      path: 'pipelineQuery', // 管线查询
      loadChildren: './views/pipeline-query/pipeline-query.module#PipelineQueryModule'
    }, {
      path: 'pipelineStatistics', // 管线统计
      loadChildren: './views/pipeline-statistics/pipeline-statistics.module#PipelineStatisticsModule'
    }, {
      path: 'housingManagement', // 房屋管理
      loadChildren: './views/housing-management/housing-management.module#HousingManagementModule'
    }, {
      path: 'mapPrint', // 打印出图
      loadChildren: './views/map-print/map-print.module#MapPrintModule'
    }, {
      path: 'comprehensiveAnalysis', // 综合分析
      loadChildren: './views/comprehensive-analysis/comprehensive-analysis.module#ComprehensiveAnalysisModule'
    }]
  },
  {
    path: 'systemManagement', // 系统管理
    component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: './views/system-management/system-management.module#SystemManagementModule'
    }]
  },
  {
    path: '**', // 路由判定
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
