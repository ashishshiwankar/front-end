import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignreqtopcmcsuperComponent } from './assignreqtopcmcsuper.component';

describe('AssignreqtopcmcsuperComponent', () => {
  let component: AssignreqtopcmcsuperComponent;
  let fixture: ComponentFixture<AssignreqtopcmcsuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignreqtopcmcsuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignreqtopcmcsuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
