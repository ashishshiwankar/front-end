import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneUpdatingComponent } from './zone-updating.component';

describe('ZoneUpdatingComponent', () => {
  let component: ZoneUpdatingComponent;
  let fixture: ComponentFixture<ZoneUpdatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneUpdatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneUpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
