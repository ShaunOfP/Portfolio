import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/components/language.service';

@Component({
  selector: 'app-header-alternative',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header-alternative.component.html',
  styleUrl: './header-alternative.component.scss'
})
export class HeaderAlternativeComponent {
  isInactive: boolean = false;
  isInactive1: boolean = true;
  currentLanguage: string = 'en';

  constructor(public translate: TranslateService, public languageService: LanguageService) {

  }

  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.translate.use(language);
    });
  }

  activateLanguageIcon(language: string) {
    this.languageService.changeLanguage(language);
    switch (language) {
      case language = "en":
        this.isInactive = false;
        this.isInactive1 = true;
        break;
      case language = "ger":
        this.isInactive = true;
        this.isInactive1 = false;
        break;
    }
  }
}
