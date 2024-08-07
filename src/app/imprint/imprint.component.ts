import { Component } from '@angular/core';
import { HeaderAlternativeComponent } from '../shared/components/header-alternative/header-alternative.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderAlternativeComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
