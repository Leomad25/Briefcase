import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() isDarkness: boolean = false;
  @Input() isSeparatorEnable: boolean = false;
  @Input('addressRedirect') link: string = '';
  @Input() label: string = 'Link';

  clickOnLink() {
    window.location.href = this.link;
  }
}
