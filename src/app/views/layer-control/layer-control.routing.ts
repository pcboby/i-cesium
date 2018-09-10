import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LayerControlComponent
} from './layer-control.component';

const routes: Routes = [{
  path: '',
  component: LayerControlComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayerControlRouting {}
