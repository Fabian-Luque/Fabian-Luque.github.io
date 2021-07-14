import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperContactUsComponent } from './web-developer-contact-us.component';

describe('WebDeveloperContactUsComponent', () => {
  let component: WebDeveloperContactUsComponent;
  let fixture: ComponentFixture<WebDeveloperContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveloperContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeveloperContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
