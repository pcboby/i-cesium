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
  TempComponent,
  LayerComponent
} from './components';
// 子集弹窗
const dialogComponents = [
  TempComponent,
  LayerComponent, // 当前图层
];
@NgModule({
  imports: [
    CommonModule,
    LayerControlRouting,
    CoreModule,

  ],
  declarations: [
    LayerControlComponent,
    ...dialogComponents
  ],
  entryComponents: [
    ...dialogComponents
  ]
})
export class LayerControlModule {}
