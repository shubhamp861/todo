import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbtnComponent } from './actionbtn.component';

describe('ActionbtnComponent', () => {
  let component: ActionbtnComponent;
  let fixture: ComponentFixture<ActionbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
