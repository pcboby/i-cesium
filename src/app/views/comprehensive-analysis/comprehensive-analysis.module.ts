import { CoreModule } from './../../core/core.module';
import { ComprehensiveAnalysisRouting } from './comprehensive-analysis.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprehensiveAnalysisComponent } from './comprehensive-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    ComprehensiveAnalysisRouting,
    CoreModule
  ],
  declarations: [ComprehensiveAnalysisComponent]
})
export class ComprehensiveAnalysisModule { }
