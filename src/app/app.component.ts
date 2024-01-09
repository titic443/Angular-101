import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';

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
    SquareFlexComponent,
  ],
})
export class AppComponent {
  title = 'angular01';
  value = 0;
  myMinLabel = 'myMinLabelX';
  myMaxLabel = 'myMaxLabelX';
  defaultCouter = 20;
  cuntomerList: string[] = ['customer1', 'customer2', 'customer3', 'customer4'];

  sqHeight = 100;
  sqWidth = 200;

  activate: boolean = false;
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

  switchActivate() {
    this.activate = !this.activate;
  }

  pushCustomer(value: string) {
    this.cuntomerList.push(value);
    console.log(this.cuntomerList);
  }

  unshiftCustomer(value: string) {
    this.cuntomerList.unshift(value);
    console.log(this.cuntomerList);
  }

  removeCustomer(index: number) {
    this.cuntomerList.splice(index, 1);
  }
}
