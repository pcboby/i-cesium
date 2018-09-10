import { CoreModule } from './../../core/core.module';
import { PipelineQueryRouting } from './pipeline-query.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineQueryComponent } from './pipeline-query.component';

@NgModule({
  imports: [
    CommonModule,
    PipelineQueryRouting,
    CoreModule
  ],
  declarations: [PipelineQueryComponent]
})
export class PipelineQueryModule { }
