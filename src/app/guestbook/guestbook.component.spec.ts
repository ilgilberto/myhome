/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestbookComponent } from './guestbook.component';

describe('GuestbookComponent', () => {
  let component: GuestbookComponent;
  let fixture: ComponentFixture<GuestbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
