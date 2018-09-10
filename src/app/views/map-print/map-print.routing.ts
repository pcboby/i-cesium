import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MapPrintComponent
} from './map-print.component';

const routes: Routes = [{
  path: '',
  component: MapPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPrintRouting {}
