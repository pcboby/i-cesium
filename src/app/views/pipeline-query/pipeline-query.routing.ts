import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  PipelineQueryComponent
} from './pipeline-query.component';

const routes: Routes = [{
  path: '',
  component: PipelineQueryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineQueryRouting {}
