/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BumperreplacementComponent } from './bumperreplacement.component';

describe('BumperreplacementComponent', () => {
  let component: BumperreplacementComponent;
  let fixture: ComponentFixture<BumperreplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumperreplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumperreplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
