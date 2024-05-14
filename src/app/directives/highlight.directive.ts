import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
 /*  @Input() searchedWord: string;
  @Input() content: string;
  @Input() classToApply: string; */
  @Input() searchedWord: string = '';
  @Input() content: string = '';
  @Input() classToApply: string = '';
  @Input() setTitle: boolean = false;
  @Input() highlightColor = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    if (!this.content) {
      return;
    }

    if (this.setTitle) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'title',
        this.content
      );
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span style="background-color: ${this.highlightColor}">\$1</span>`);
  }

}
