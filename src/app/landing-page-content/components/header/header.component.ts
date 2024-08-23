import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/components/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isClicked: boolean = false;
  isClicked2: boolean = false;
  isClicked3: boolean = false;
  isInactive: boolean = false;
  isInactive1: boolean = true;
  currentLanguage: string = 'en';


  constructor(public translate: TranslateService, public languageService: LanguageService) {
    
  }


  toggleClass(id: number) {
    switch (id) {
      case id = 1:
        this.isClicked = !this.isClicked;
        this.isClicked2 = false;
        this.isClicked3 = false;
        break;
      case id = 2:
        this.isClicked2 = !this.isClicked2;
        this.isClicked = false;
        this.isClicked3 = false;
        break;
      case id = 3:
        this.isClicked3 = !this.isClicked3;
        this.isClicked2 = false;
        this.isClicked = false;
        break;
    }
  }


  ngOnInit() {
    this.smoothScroll();

    this.toggleBurgerMenu();

    this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.translate.use(language);
    });
  }


  smoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }


  toggleBurgerMenu(){
    let burgerMenu = document.querySelector('.burger-menu');

    burgerMenu?.addEventListener('click', () => {
      burgerMenu?.classList.toggle('active');
      document.querySelector('.off-screen-menu')?.classList.toggle('active');
    });
  }


  switchLanguage(language: string) {
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