import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperResumeComponent } from './web-developer-resume.component';

describe('WebDeveloperResumeComponent', () => {
  let component: WebDeveloperResumeComponent;
  let fixture: ComponentFixture<WebDeveloperResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveloperResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeveloperResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
