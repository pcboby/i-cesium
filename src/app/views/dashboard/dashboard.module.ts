import { CoreModule } from './../../core/core.module';
import {
  DashboardRouting
} from './dashboard.routing';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  DashboardComponent
} from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    CoreModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
