import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsAndCowsMainComponent } from './bulls-and-cows-main.component';

describe('BullsAndCowsMainComponent', () => {
  let component: BullsAndCowsMainComponent;
  let fixture: ComponentFixture<BullsAndCowsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullsAndCowsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullsAndCowsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
