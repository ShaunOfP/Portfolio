import { Component, Input } from '@angular/core';
import { Item } from '../../../../../models/item.model';

@Component({
  selector: 'app-project-blueprint-mirrored',
  standalone: true,
  imports: [],
  templateUrl: './project-blueprint-mirrored.component.html',
  styleUrl: './project-blueprint-mirrored.component.scss'
})
export class ProjectBlueprintMirroredComponent {
  @Input() projectDataMirrored: Item = {
    'name': '',
    'languages': '',
    'description': '',
    'imgPath': '',
    'livetestPath': '',
    'githubPath': ''
  };
}
