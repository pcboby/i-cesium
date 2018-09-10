import { CesiumDirective } from './directies';

import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {
  throwIfAlreadyLoaded
} from './module-import-guard';
import {
  RouterModule
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
import { LayoutComponent, HeaderComponent, SilderComponent, WraperComponent, FooterComponent } from 'src/app/core/components';


const modules = [
  RouterModule, CommonModule
];

const directives = [
  CesiumDirective
];

const components = [
  LayoutComponent,
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    // throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
