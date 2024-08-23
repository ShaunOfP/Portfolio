import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconInfos = [{
    "path": "icon-angular",
    "name": "Angular"
  },
  {
    "path": "icon-ts",
    "name": "TypeScript"
  },
  {
    "path": "icon-js",
    "name": "JavaScript"
  },
  {
    "path": "icon-html",
    "name": "HTML"
  },
  {
    "path": "icon-firebase",
    "name": "Firebase"
  },
  {
    "path": "icon-git",
    "name": "GIT"
  },
  {
    "path": "icon-css",
    "name": "CSS"
  },
  {
    "path": "icon-api",
    "name": "Rest-Api"
  },
  {
    "path": "icon-scrum",
    "name": "Scrum"
  },
  {
    "path": "icon-mat-design",
    "name": "Material Design"
  }];
}
