import { CoreModule } from './../../core/core.module';
import { MapPositionRouting } from './map-position.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPositionComponent } from './map-position.component';

@NgModule({
  imports: [
    CommonModule,
    MapPositionRouting,
    CoreModule
  ],
  declarations: [MapPositionComponent]
})
export class MapPositionModule { }
