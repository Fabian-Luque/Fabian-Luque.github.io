import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperPortfolioComponent } from './web-developer-portfolio.component';

describe('WebDeveloperPortfolioComponent', () => {
  let component: WebDeveloperPortfolioComponent;
  let fixture: ComponentFixture<WebDeveloperPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveloperPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeveloperPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
