import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[kyuDynamicComponent]'
})
export class LoadingMaskDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
