import { Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { DarknessMode } from 'src/app/helpers/darknessMode.helper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
  @Input() isLoadingScreen: boolean = false;
  @Output('onDarknessModeChange')
    eventDarknessModeChange: EventEmitter<boolean> = new EventEmitter();
  
  @ViewChild('header') headerElement!: ElementRef;
  @ViewChild('body') bodyElement!: ElementRef;

  isDarkness: boolean = DarknessMode.getDarknessMode(); 

  onBodyScroll() {
    (this.bodyElement.nativeElement.scrollTop > 0) ?
      this.headerElement.nativeElement.classList.remove("anchored") :
      this.headerElement.nativeElement.classList.add("anchored");
  }

  onDarknessModeChange() {
    DarknessMode.setDarknessMode(this.isDarkness);
    this.eventDarknessModeChange.emit();
  }
}