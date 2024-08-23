import { Component, Input } from '@angular/core';
import { Item } from '../../../../../models/item.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-blueprint-mirrored',
  standalone: true,
  imports: [TranslateModule],
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
