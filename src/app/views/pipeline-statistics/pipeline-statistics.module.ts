import { CoreModule } from './../../core/core.module';
import { PipelineStatisticsRouting } from './pipeline-statistics.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineStatisticsComponent } from './pipeline-statistics.component';

@NgModule({
  imports: [
    CommonModule,
    PipelineStatisticsRouting,
    CoreModule
  ],
  declarations: [PipelineStatisticsComponent]
})
export class PipelineStatisticsModule { }
