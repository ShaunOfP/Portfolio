import { Component } from '@angular/core';
import { HeaderComponent } from '../landing-page-content/components/header/header.component';
import { FooterAlternativeComponent } from '../shared/components/footer-alternative/footer-alternative.component';
import { HeaderAlternativeComponent } from "../shared/components/header-alternative/header-alternative.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, FooterAlternativeComponent, HeaderAlternativeComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
