import { Component, ComponentFactoryResolver, Input, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadingMaskDirective } from './loading-mask.directive';
import { LoadingMaskService } from './loading-mask.service';

@Component({
  selector: 'kyu-loading',
  template: ` <ng-template #kyuDynamicComponent></ng-template>  `,
  styles: [
  ]
})
export class LoadingMaskComponent implements OnInit {

  /**
   * Show Shape Type
   *
   * @type string
  */
  @Input() ShapeType: string;

  /**
   * Check IsLoading Type
   *
   * @type boolean
  */
  @Input() IsLoading: boolean;


  @ViewChild('kyuDynamicComponent', {static: true, read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    private dynamicComponentService: LoadingMaskService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.IsLoading) {
      this.container.clear();
    } else {
      this.displayComponent(this.ShapeType);
    }
  }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName) );
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

}
