import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAlternativeComponent } from './footer-alternative.component';

describe('FooterAlternativeComponent', () => {
  let component: FooterAlternativeComponent;
  let fixture: ComponentFixture<FooterAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAlternativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
