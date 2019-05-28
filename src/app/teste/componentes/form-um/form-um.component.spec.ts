import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUmComponent } from './form-um.component';

describe('FormUmComponent', () => {
  let component: FormUmComponent;
  let fixture: ComponentFixture<FormUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
