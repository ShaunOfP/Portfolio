import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainComponent } from './components/main/main.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ProjectsPortfolioComponent } from './components/projects-portfolio/projects-portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent, AboutMeComponent, MySkillsComponent, ProjectsPortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss'
})
export class LandingPageContentComponent {
}
