import { Component } from '@angular/core';
import { ProjectBlueprintComponent } from './project-blueprint/project-blueprint.component';
import { ProjectBlueprintMirroredComponent } from './project-blueprint-mirrored/project-blueprint-mirrored.component';

@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectBlueprintComponent, ProjectBlueprintMirroredComponent],
  templateUrl: './projects-portfolio.component.html',
  styleUrl: './projects-portfolio.component.scss'
})
export class ProjectsPortfolioComponent {
  
}
