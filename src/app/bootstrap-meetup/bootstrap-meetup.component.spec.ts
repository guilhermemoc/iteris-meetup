import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMeetupComponent } from './bootstrap-meetup.component';

describe('BootstrapMeetupComponent', () => {
  let component: BootstrapMeetupComponent;
  let fixture: ComponentFixture<BootstrapMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
