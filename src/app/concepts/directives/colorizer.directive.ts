import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  // HostListener
  // HostBinding

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dependency Injection
    console.log('Inside Constructor of ColorizerDirective');

    const el = this.elRef.nativeElement;
    console.log(el);
    // chaging the color using JS
    // el.style.backgroundColor = 'red';
    // el.style.color = '#fff';

    // instead of using JS -- try using Renderer2
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', '#fff');
  }

  @HostListener('click', ['$event.target'])
  onClick(clickedEl) {
    console.log(clickedEl);
    this.renderer.setStyle(clickedEl, 'background-color', 'yellow');
    this.renderer.setStyle(clickedEl, 'color', '#000');
  }

}
