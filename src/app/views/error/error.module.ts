import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorRouting } from './error.routing';

@NgModule({
  imports: [
    CommonModule,
    ErrorRouting,
    CoreModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
