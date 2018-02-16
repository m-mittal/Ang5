import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBookReeditExerciseComponent } from './ng-book-reedit-exercise.component';

describe('NgBookReeditExerciseComponent', () => {
  let component: NgBookReeditExerciseComponent;
  let fixture: ComponentFixture<NgBookReeditExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBookReeditExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBookReeditExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
