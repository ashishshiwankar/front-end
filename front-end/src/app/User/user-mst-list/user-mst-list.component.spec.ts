import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMstListComponent } from './user-mst-list.component';

describe('UserMstListComponent', () => {
  let component: UserMstListComponent;
  let fixture: ComponentFixture<UserMstListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMstListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
