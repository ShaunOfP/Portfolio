import { Component } from '@angular/core';
import { HeaderAlternativeComponent } from '../shared/components/header-alternative/header-alternative.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderAlternativeComponent, TranslateModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
