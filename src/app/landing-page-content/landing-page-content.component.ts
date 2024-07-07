import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MainComponent } from '../main/main.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { ProjectsPortfolioComponent } from '../projects-portfolio/projects-portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent, AboutMeComponent, MySkillsComponent, ProjectsPortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss'
})
export class LandingPageContentComponent {

}
