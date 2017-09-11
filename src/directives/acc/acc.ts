import {  Directive, ElementRef, AfterViewInit, Renderer2} from '@angular/core';

/**
 * Generated class for the AccDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
 @Directive({

   selector: '[appButton]'

 })
export class AccDirective {

  constructor(private er: ElementRef, private renderer2: Renderer2) { }



  ngAfterViewInit() {
    alert('ff');
    this.renderer2.setStyle(this.er.nativeElement, 'background-color', 'blue');
    this.renderer2.addClass(this.er.nativeElement, 'btn');

  }

}
