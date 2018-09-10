import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MapOperationComponent
} from './map-operation.component';

const routes: Routes = [{
  path: '',
  component: MapOperationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapOperationRouting {}
