import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ActionBarComponent,
    MaxMinMeterComponent,
  ],
})
export class AppComponent {
  title = 'angular01';
  value = 0;
  myMinLabel = 'myMinLabelX';
  myMaxLabel = 'myMaxLabelX';

  // @Output

  calBuffet(value: any) {
    console.log(value);
    let price = parseInt(value);

    this.value = (price * 3) / 4;
  }

  testNumberChange(value: number) {
    console.log('this from output ', value);
  }

  doAppMinChange(value: any) {
    console.log('do app min change from app componentes', value);
  }

  doAppMaxChange(value: any) {
    console.log('do app max change from app componentes', value);
  }
}
