import { CoreModule } from './../../core/core.module';
import { RegistRouting } from './regist.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistComponent } from './regist.component';

@NgModule({
  imports: [
    CommonModule,
    RegistRouting,
    CoreModule
  ],
  declarations: [RegistComponent]
})
export class RegistModule { }
