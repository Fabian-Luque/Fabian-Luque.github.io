import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperIndexComponent } from './web-developer-index.component';

describe('WebDeveloperIndexComponent', () => {
  let component: WebDeveloperIndexComponent;
  let fixture: ComponentFixture<WebDeveloperIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveloperIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeveloperIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
