import { CoreModule } from './../../core/core.module';
import { MapOperationRouting } from './map-operation.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapOperationComponent } from './map-operation.component';

@NgModule({
  imports: [
    CommonModule,
    MapOperationRouting,
    CoreModule
  ],
  declarations: [MapOperationComponent]
})
export class MapOperationModule { }
