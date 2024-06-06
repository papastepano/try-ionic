import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonHeader, IonContent, RouterOutlet, IonTitle, IonToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'try-ionic';
}
