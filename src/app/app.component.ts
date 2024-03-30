import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription, interval, map } from 'rxjs';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TimerApplicationInAngular';
}
