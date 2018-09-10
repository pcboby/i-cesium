import { CoreModule } from './../../core/core.module';
import { HousingManagementRouting } from './housing-management.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingManagementComponent } from './housing-management.component';

@NgModule({
  imports: [
    CommonModule,
    HousingManagementRouting,
    CoreModule
  ],
  declarations: [HousingManagementComponent]
})
export class HousingManagementModule { }
