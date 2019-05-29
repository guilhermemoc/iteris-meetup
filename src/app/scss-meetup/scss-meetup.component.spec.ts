import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssMeetupComponent } from './scss-meetup.component';

describe('ScssMeetupComponent', () => {
  let component: ScssMeetupComponent;
  let fixture: ComponentFixture<ScssMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
