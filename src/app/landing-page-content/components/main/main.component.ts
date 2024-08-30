import { AfterContentInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterContentInit {
  ngAfterContentInit() {
    document.querySelector('.scroll-down')?.classList.add('jump-animation');
  }
}
