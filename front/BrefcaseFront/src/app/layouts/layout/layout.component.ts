import { Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() isDarkness:boolean = false;
  @Input() isLoadingScreen:boolean = false;
  @ViewChild('header') headerElement!: ElementRef;
  @ViewChild('body') bodyElement!: ElementRef;

  onBodyScroll() {
    if(this.bodyElement.nativeElement.scrollTop > 0) {
      this.headerElement.nativeElement.classList.remove("anchored");
    } else {
      this.headerElement.nativeElement.classList.add("anchored");
    }
  }
}
