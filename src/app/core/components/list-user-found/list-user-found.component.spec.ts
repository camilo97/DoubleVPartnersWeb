import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserFoundComponent } from './list-user-found.component';

describe('ListUserFoundComponent', () => {
  let component: ListUserFoundComponent;
  let fixture: ComponentFixture<ListUserFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
