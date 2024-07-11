import { Component } from '@angular/core';
import { ProjectBlueprintComponent } from './project-blueprint/project-blueprint.component';
import { ProjectBlueprintMirroredComponent } from './project-blueprint-mirrored/project-blueprint-mirrored.component';
import { Item } from '../../../../models/item.model'; 

@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectBlueprintComponent, ProjectBlueprintMirroredComponent],
  templateUrl: './projects-portfolio.component.html',
  styleUrl: './projects-portfolio.component.scss'
})
export class ProjectsPortfolioComponent {
  projects: Item[] = [
    {
      'name': 'Join',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'Task manager inspired by the Kanban System. Create and organzie tasks using drag and drop function, assign users and categories.',
      'imgPath': '',
      'livetestPath': '',
      'githubPath': 'https://github.com/ShaunOfP/Join'
    },
    {
      'name': 'El Pollo Loco',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'imgPath': '',
      'livetestPath': '',
      'githubPath': 'https://github.com/ShaunOfP/El-Pollo-Loco'
    },
    {
      'name': 'x',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'x',
      'imgPath': '',
      'livetestPath': '',
      'githubPath': ''
    },
    {
      'name': 'x',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'x',
      'imgPath': '',
      'livetestPath': '',
      'githubPath': ''
    },
    {
      'name': 'x',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'x',
      'imgPath': '',
      'livetestPath': '',
      'githubPath': ''
    }
  ];
}
