import { Component, OnInit } from '@angular/core';
import { DarknessMode } from 'src/app/helpers/darknessMode.helper';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.scss']
})
export class TestScreenComponent implements OnInit {
  isLoadingScreen: boolean = true;
  isDarkness!: boolean;

  constructor() {
    this.onDarknessModeChange();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoadingScreen = false
    }, 1000);
  }

  onDarknessModeChange() {
    this.isDarkness = DarknessMode.getDarknessMode();
  }
}
