import { Injectable } from '@angular/core';
import { BookCaseComponent } from './component/bookcase.component';
import { RippleComponent } from './component/ripple.component';
import { RollerComponent } from './component/roller.component';
import { SpinnerComponent } from './component/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingMaskService {

  private components = {
    bookcase: BookCaseComponent,
    roller: RollerComponent,
    ripple: RippleComponent,
    spinner: SpinnerComponent
  }
  constructor() { }

  getComponent(componentName) {
    return this.components[componentName];
  }

}
