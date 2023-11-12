import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.scss']
})
export class TestScreenComponent implements OnInit {
  isLoadingScreen: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoadingScreen = false
    }, 1000);
  }
}
