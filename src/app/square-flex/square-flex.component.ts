import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  standalone: true,
  imports: [],
  templateUrl: './square-flex.component.html',
  styleUrl: './square-flex.component.scss',
})
export class SquareFlexComponent {
  @Input() divWidth = 200;
  @Input() divHeight = 250;
  @Input() couterWidth: number = 0;
}
