import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  mouseOver: boolean = false;

  mouseOverTrue(){
    this.mouseOver = true;
  }

  mouseOverFalse(){
    this.mouseOver = false;
  }

  navigateToGithub(){
    window.open("https://github.com/ShaunOfP", "_blank");
  }
}
