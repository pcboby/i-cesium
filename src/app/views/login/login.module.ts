import { CoreModule } from './../../core/core.module';
import { LoginRouting } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    CoreModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
