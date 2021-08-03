import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Click-Counter';

  //count Number
  countNumber = 0;

  //resetBtn
  resetBtn() {
    this.countNumber = 0;
  }

  //increaseBtn
  increaseBtn() {
    this.countNumber = this.countNumber + 1;
  }

  //decreaseBtn
  decreaseBtn() {
    this.countNumber = this.countNumber - 1;
    if (this.countNumber < 0) {
      this.countNumber = 0;
    }
  }
}
