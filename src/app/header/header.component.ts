import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isClicked: boolean = false;
  isClicked2: boolean = false;
  isClicked3: boolean = false;

  toggleClass(id: number) {
    switch (id) {
      case id = 1:
        this.isClicked = !this.isClicked;
        this.isClicked2 = false;
        this.isClicked3 = false;
        break;
      case id = 2:
        this.isClicked2 = !this.isClicked2;
        this.isClicked = false;
        this.isClicked3 = false;
        break;
      case id = 3:
        this.isClicked3 = !this.isClicked3;
        this.isClicked2 = false;
        this.isClicked = false;
        break;
    }
  }
}
