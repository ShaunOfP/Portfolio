import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-alternative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-alternative.component.html',
  styleUrl: './header-alternative.component.scss'
})
export class HeaderAlternativeComponent {
  isInactive: boolean = false;
  isInactive1: boolean = true;

  activateLanguageIcon(id: string) {
    switch (id) {
      case id = "en":
        this.isInactive = false;
        this.isInactive1 = true;
        break;
      case id = "ger":
        this.isInactive = true;
        this.isInactive1 = false;
        break;
    }
  }
}
