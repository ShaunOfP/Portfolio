import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPortfolioComponent } from './projects-portfolio.component';

describe('ProjectsPortfolioComponent', () => {
  let component: ProjectsPortfolioComponent;
  let fixture: ComponentFixture<ProjectsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
