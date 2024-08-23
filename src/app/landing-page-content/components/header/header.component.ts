import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


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

  constructor(public translate: TranslateService){

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

    let burgerMenu = document.querySelector('.burger-menu');

    burgerMenu?.addEventListener('click', () => {
      burgerMenu?.classList.toggle('active');
      document.querySelector('.off-screen-menu')?.classList.toggle('active');
    });
  }

  switchLanguage(id: string) {
    switch (id) {
      case id = "en":
        this.isInactive = false;
        this.isInactive1 = true;
        this.translate.use('en');
        break;
      case id = "ger":
        this.isInactive = true;
        this.isInactive1 = false;
        this.translate.use('ger');
        break;
    }
  }
}