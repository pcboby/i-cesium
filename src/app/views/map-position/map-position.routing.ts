import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MapPositionComponent
} from './map-position.component';

const routes: Routes = [{
  path: '',
  component: MapPositionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPositionRouting {}
