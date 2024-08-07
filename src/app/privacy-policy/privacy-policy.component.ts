import { Component } from '@angular/core';
import { HeaderAlternativeComponent } from '../shared/components/header-alternative/header-alternative.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderAlternativeComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
