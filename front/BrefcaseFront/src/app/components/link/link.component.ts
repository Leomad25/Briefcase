import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnChanges {
  @Input() isDarkness: boolean = false;
  @Input() isSeparatorEnable: boolean = false;
  @Input('addressRedirect') link: string = '';
  @Input() label: string = 'Link';

  @ViewChild('link') linkElement!: ElementRef;

  clickOnLink() {
    window.location.href = this.link;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.linkElement == null || this.linkElement == undefined) {
      console.log('don\'t was posible fount element app-link');
      return;
    }
    
    (this.isDarkness == true) ?
      this.linkElement.nativeElement.classList.add('darkness'):
      this.linkElement.nativeElement.classList.remove('darkness');
  }
}
