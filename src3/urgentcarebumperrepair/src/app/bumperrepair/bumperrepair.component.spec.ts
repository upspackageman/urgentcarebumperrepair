/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BumperrepairComponent } from './bumperrepair.component';

describe('BumperrepairComponent', () => {
  let component: BumperrepairComponent;
  let fixture: ComponentFixture<BumperrepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumperrepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumperrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
