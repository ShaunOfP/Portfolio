import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlueprintComponent } from './project-blueprint.component';

describe('ProjectBlueprintComponent', () => {
  let component: ProjectBlueprintComponent;
  let fixture: ComponentFixture<ProjectBlueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBlueprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
