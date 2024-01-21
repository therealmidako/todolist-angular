import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){

  }
  
  setshadow(shadow:string){
    this.element.nativeElement.setAttribute('box-shadow')
  }

}
