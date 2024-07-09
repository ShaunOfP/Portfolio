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
  projects = [
    {
      'name': 'Join',
      'languages': ['HTML', 'CSS', 'JavaScript'],
      'description': 'Task manager inspired by the Kanban System. Create and organzie tasks using drag and drop function, assign users and categories.',
    },
    {
      'name': 'El Pollo Loco',
      'languages': ['HTML', 'CSS', 'JavaScript'],
      'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      'name': 'x',
      'languages': ['x', 'x', 'x'],
      'description': 'x',
    },
    {
      'name': 'x',
      'languages': ['x', 'x', 'x'],
      'description': 'x',
    },
    {
      'name': 'x',
      'languages': ['x', 'x', 'x'],
      'description': 'x',
    }
  ];
}
