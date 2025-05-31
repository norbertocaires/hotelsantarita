import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InfoComponent, RouterModule],  // <- aqui importa o componente e o módulo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelSantaRita';
}
