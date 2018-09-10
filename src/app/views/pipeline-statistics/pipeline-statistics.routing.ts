import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  PipelineStatisticsComponent
} from './pipeline-statistics.component';

const routes: Routes = [{
  path: '',
  component: PipelineStatisticsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineStatisticsRouting {}
