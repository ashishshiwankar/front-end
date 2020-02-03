import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToPcmcComponent } from './assign-to-pcmc.component';

describe('AssignToPcmcComponent', () => {
  let component: AssignToPcmcComponent;
  let fixture: ComponentFixture<AssignToPcmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignToPcmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignToPcmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
