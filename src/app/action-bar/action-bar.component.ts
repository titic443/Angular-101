import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaxMinMeterComponent } from '../max-min-meter/max-min-meter.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  couter: number = 0;
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();
  decrease() {
    if (this.couter > 0) {
      // this.couter = this.couter - this.step;
      this.couter -= this.step;
      this.numberChange.emit(this.couter);
    }
  }

  increase() {
    if (this.couter < 100) {
      // this.couter = this.couter + this.step;
      this.couter += this.step;
      this.numberChange.emit(this.couter);
    }
  }
}
