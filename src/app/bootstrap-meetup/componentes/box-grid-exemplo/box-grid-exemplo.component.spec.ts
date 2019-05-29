import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGridExemploComponent } from './box-grid-exemplo.component';

describe('BoxGridExemploComponent', () => {
  let component: BoxGridExemploComponent;
  let fixture: ComponentFixture<BoxGridExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxGridExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxGridExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
