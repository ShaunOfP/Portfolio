import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing-page-content/components/header/header.component';
import { AboutMeComponent } from './landing-page-content/components/about-me/about-me.component';
import { MainComponent } from './landing-page-content/components/main/main.component';
import { MySkillsComponent } from './landing-page-content/components/my-skills/my-skills.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectsPortfolioComponent } from './landing-page-content/components/projects-portfolio/projects-portfolio.component';
import { ContactComponent } from './landing-page-content/components/contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,HeaderComponent, MainComponent, AboutMeComponent, MySkillsComponent, ProjectsPortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  title = 'portfolio';
}