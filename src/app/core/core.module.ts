
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
import {TooltipModule, ModalModule} from 'ngx-bootstrap';
import {
  LayoutComponent,
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  LayoutMapComponent
} from './components';
import {
  CesiumToolsComponent
} from './components/cesium-tools/cesium-tools.component';
import {
  CesiumDirective
} from './directies';


const modules = [
  RouterModule, CommonModule
];

const bootstrapModules = [
  TooltipModule.forRoot(),
  ModalModule.forRoot()
];

const directives = [
  CesiumDirective
];

const components = [
  LayoutComponent,
  LayoutMapComponent,
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  CesiumToolsComponent
];

@NgModule({
  imports: [
    ...modules,
    ...bootstrapModules
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
