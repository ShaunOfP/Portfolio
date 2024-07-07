import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlueprintMirroredComponent } from './project-blueprint-mirrored.component';

describe('ProjectBlueprintMirroredComponent', () => {
  let component: ProjectBlueprintMirroredComponent;
  let fixture: ComponentFixture<ProjectBlueprintMirroredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBlueprintMirroredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBlueprintMirroredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
