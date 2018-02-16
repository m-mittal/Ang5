import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterUserListObservable1Component } from './twitter-user-list-observable1.component';

describe('TwitterUserListObservable1Component', () => {
  let component: TwitterUserListObservable1Component;
  let fixture: ComponentFixture<TwitterUserListObservable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterUserListObservable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUserListObservable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
