import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  mouseOver: boolean = false;

  mouseOverTrue() {
    this.mouseOver = true;
  }

  mouseOverFalse() {
    this.mouseOver = false;
  }
}
