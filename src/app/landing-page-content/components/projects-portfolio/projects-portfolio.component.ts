import { Component } from '@angular/core';
import { ProjectBlueprintComponent } from './project-blueprint/project-blueprint.component';
import { ProjectBlueprintMirroredComponent } from './project-blueprint-mirrored/project-blueprint-mirrored.component';
import { Item } from '../../../../models/item.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-portfolio',
  standalone: true,
  imports: [ProjectBlueprintComponent, ProjectBlueprintMirroredComponent, TranslateModule],
  templateUrl: './projects-portfolio.component.html',
  styleUrl: './projects-portfolio.component.scss'
})
export class ProjectsPortfolioComponent {
  projects: Item[] = [
    {
      'name': 'Join',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'portfolio-join-description',
      'imgPath': './assets/img/projects/join-laptop.png',
      'livetestPath': 'http://join.sven-roesgen.de/',
      'githubPath': 'https://github.com/ShaunOfP/Join'
    },
    {
      'name': 'El Pollo Loco',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'portfolio-polloloco-description',
      'imgPath': './assets/img/projects/el-pollo-loco-laptop.png',
      'livetestPath': 'http://elpolloloco.sven-roesgen.de/',
      'githubPath': 'https://github.com/ShaunOfP/El-Pollo-Loco'
    },
    {
      'name': 'Pokédex',
      'languages': 'HTML | CSS | JavaScript | Api',
      'description': 'portfolio-pokedex-description',
      'imgPath': './assets/img/projects/pokedex-laptop.png',
      'livetestPath': 'http://pokedex.sven-roesgen.de/',
      'githubPath': 'https://github.com/ShaunOfP/Pok-dex'
    },
  ];
}
