import {
  CoreModule
} from './../../core/core.module';

import {
  LayerControlRouting
} from './layer-control.routing';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  LayerControlComponent
} from './layer-control.component';

@NgModule({
  imports: [
    CommonModule,
    LayerControlRouting,
    CoreModule,

  ],
  declarations: [
    LayerControlComponent
  ]
})
export class LayerControlModule {}
