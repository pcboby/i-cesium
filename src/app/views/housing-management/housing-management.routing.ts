import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HousingManagementComponent
} from './housing-management.component';

const routes: Routes = [{
  path: '',
  component: HousingManagementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousingManagementRouting {}
