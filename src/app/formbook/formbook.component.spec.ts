/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormbookComponent } from './formbook.component';

describe('FormbookComponent', () => {
  let component: FormbookComponent;
  let fixture: ComponentFixture<FormbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
