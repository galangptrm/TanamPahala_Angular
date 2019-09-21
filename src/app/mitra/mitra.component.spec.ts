import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitraComponent } from './mitra.component';

describe('MitraComponent', () => {
  let component: MitraComponent;
  let fixture: ComponentFixture<MitraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
