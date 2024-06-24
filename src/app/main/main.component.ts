import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  navigateToGithub(){
    window.open("https://github.com/ShaunOfP", "_blank");
  }
}
