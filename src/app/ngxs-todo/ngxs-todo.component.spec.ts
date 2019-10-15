import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsTodoComponent } from './ngxs-todo.component';

describe('NgrxTodoComponent', () => {
  let component: NgxsTodoComponent;
  let fixture: ComponentFixture<NgxsTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
