import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
  selector: 'app-max-min-meter',
  standalone: true,
  imports: [ActionBarComponent],
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss',
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'MinLabel';
  @Input() maxLabel = 'MaxLabel';

  @Output() doMinChange = new EventEmitter();
  @Output() doMaxChange = new EventEmitter();

  doMinChanges(value: number) {
    // console.log('do min change');
    this.doMinChange.emit(value);
  }

  doMaxChanges(value: number) {
    // console.log('do max change');
    this.doMaxChange.emit(value);
  }
}
