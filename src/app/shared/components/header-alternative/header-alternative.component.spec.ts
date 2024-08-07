import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlternativeComponent } from './header-alternative.component';

describe('HeaderAlternativeComponent', () => {
  let component: HeaderAlternativeComponent;
  let fixture: ComponentFixture<HeaderAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAlternativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
