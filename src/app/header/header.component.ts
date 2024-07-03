import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  line1 = false;
  line2 = false;
  line3 = false;

  activateBtn(id: number) {
    switch (id) {
      case id = 1:
        console.log(1);
        break;
      case id = 2:
        console.log(2);
        break;
      case id = 3:
        console.log(3);
        break;
    }
  }
}
