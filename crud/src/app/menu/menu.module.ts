import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { MenuComponent }   from './menu.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    MenuComponent,
  ],
  declarations: [
    MenuComponent,
  ],
  providers: [],
})
export class MenuModule { }
