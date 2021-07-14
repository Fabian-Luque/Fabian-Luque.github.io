import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactCounterComponent } from './fun-fact-counter.component';

describe('FunFactCounterComponent', () => {
  let component: FunFactCounterComponent;
  let fixture: ComponentFixture<FunFactCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
