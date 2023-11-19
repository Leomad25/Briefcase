import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AssetsList } from 'src/app/helpers/assetsList.helper';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnChanges {
  @Input() label: string = 'Checkbox';
  @Input() value: boolean = false;
  @Input() fontSize: number = 0;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  iconImage: string = AssetsList.IconsList.unchecked;

  ngOnChanges(changes: SimpleChanges): void {
    this.changeImage(this.value);
  }

  onClick() {
    this.value = !this.value;
    this.changeImage(this.value);
    this.valueChange.emit(this.value);
  }

  changeImage($opt: boolean) {
    $opt ?
      this.iconImage = AssetsList.IconsList.checked :
      this.iconImage = AssetsList.IconsList.unchecked;
  }
}
