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
import {
  TempComponent
} from './components';
// 子集弹窗
const modalComponents = [
  TempComponent
];
@NgModule({
  imports: [
    CommonModule,
    LayerControlRouting,
    CoreModule,

  ],
  declarations: [
    LayerControlComponent,
    ...modalComponents
  ],
  entryComponents: [
    ...modalComponents
  ]
})
export class LayerControlModule {}
