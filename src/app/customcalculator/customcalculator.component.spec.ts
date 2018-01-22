import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcalculatorComponent } from './customcalculator.component';

describe('CustomcalculatorComponent', () => {
  let component: CustomcalculatorComponent;
  let fixture: ComponentFixture<CustomcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
