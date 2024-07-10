import { Component, Input } from '@angular/core';
import { Item } from '../../../../../models/item.model';

@Component({
  selector: 'app-project-blueprint',
  standalone: true,
  imports: [],
  templateUrl: './project-blueprint.component.html',
  styleUrl: './project-blueprint.component.scss'
})
export class ProjectBlueprintComponent {
  @Input() projectData: Item = {
    'name': '',
    'languages': '',
    'description': '',
    'imgPath': '',
    'livetestPath': '',
    'githubPath': ''
  };
}
