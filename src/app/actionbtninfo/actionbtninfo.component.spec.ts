import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbtninfoComponent } from './actionbtninfo.component';

describe('ActionbtninfoComponent', () => {
  let component: ActionbtninfoComponent;
  let fixture: ComponentFixture<ActionbtninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionbtninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionbtninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
