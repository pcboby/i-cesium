import { CoreModule } from './../../core/core.module';
import { MapPrintRouting } from './map-print.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPrintComponent } from './map-print.component';

@NgModule({
  imports: [
    CommonModule,
    MapPrintRouting,
    CoreModule
  ],
  declarations: [MapPrintComponent]
})
export class MapPrintModule { }
