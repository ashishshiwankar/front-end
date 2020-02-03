import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelistComponent } from './zonelist.component';

describe('ZonelistComponent', () => {
  let component: ZonelistComponent;
  let fixture: ComponentFixture<ZonelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
