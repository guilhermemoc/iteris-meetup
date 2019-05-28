import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoisComponent } from './form-dois.component';

describe('FormDoisComponent', () => {
  let component: FormDoisComponent;
  let fixture: ComponentFixture<FormDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
