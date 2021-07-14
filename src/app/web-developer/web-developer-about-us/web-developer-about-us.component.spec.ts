import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperAboutUsComponent } from './web-developer-about-us.component';

describe('WebDeveloperAboutUsComponent', () => {
  let component: WebDeveloperAboutUsComponent;
  let fixture: ComponentFixture<WebDeveloperAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveloperAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeveloperAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
