import { CoreModule } from './../../core/core.module';
import { SystemManagementRouting } from './system-management.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemManagementComponent } from './system-management.component';

@NgModule({
  imports: [
    CommonModule,
    SystemManagementRouting,
    CoreModule
  ],
  declarations: [SystemManagementComponent]
})
export class SystemManagementModule { }
