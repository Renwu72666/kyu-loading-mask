import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCaseComponent } from './component/bookcase.component';
import { RippleComponent } from './component/ripple.component';
import { RollerComponent } from './component/roller.component';
import { SpinnerComponent } from './component/spinner.component';
import { LoadingMaskComponent } from './loading-mask.component';
import { LoadingMaskDirective } from './loading-mask.directive';
import { LoadingMaskService } from './loading-mask.service';



@NgModule({
  declarations: [
    LoadingMaskComponent,
    LoadingMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingMaskComponent,
    LoadingMaskDirective
  ],
  entryComponents: [
    BookCaseComponent,
    RollerComponent,
    RippleComponent,
    SpinnerComponent
  ],
  providers: [LoadingMaskService]
})
export class LoadingMaskModule { }
