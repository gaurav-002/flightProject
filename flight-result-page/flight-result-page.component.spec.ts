import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightResultPageComponent } from './flight-result-page.component';

describe('FlightResultPageComponent', () => {
  let component: FlightResultPageComponent;
  let fixture: ComponentFixture<FlightResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
