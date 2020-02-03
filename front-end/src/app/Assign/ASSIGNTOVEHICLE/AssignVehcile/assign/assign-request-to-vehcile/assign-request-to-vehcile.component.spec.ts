import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRequestToVehcileComponent } from './assign-request-to-vehcile.component';

describe('AssignRequestToVehcileComponent', () => {
  let component: AssignRequestToVehcileComponent;
  let fixture: ComponentFixture<AssignRequestToVehcileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRequestToVehcileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRequestToVehcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
