import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaxMinMeterComponent } from '../max-min-meter/max-min-meter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  @Input() couter: number = 0;
  @Output() couterChange = new EventEmitter();
  @Input() step: number = 1;
  @Input() inputDisplay = true;

  decrease() {
    if (this.couter > 0) {
      // this.couter = this.couter - this.step;
      this.couter -= this.step;
      this.couterChange.emit(this.couter);
    }
  }

  increase() {
    if (this.couter < 100) {
      // this.couter = this.couter + this.step;
      this.couter += this.step;
      this.couterChange.emit(this.couter);
    }
  }
}
