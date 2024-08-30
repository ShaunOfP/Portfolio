import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer-alternative',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './footer-alternative.component.html',
  styleUrl: './footer-alternative.component.scss'
})
export class FooterAlternativeComponent {
  mouseOver: boolean = false;

  mouseOverTrue() {
    this.mouseOver = true;
  }

  mouseOverFalse() {
    this.mouseOver = false;
  }
}
