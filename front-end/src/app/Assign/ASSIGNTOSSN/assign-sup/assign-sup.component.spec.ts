import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSupComponent } from './assign-sup.component';

describe('AssignSupComponent', () => {
  let component: AssignSupComponent;
  let fixture: ComponentFixture<AssignSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
