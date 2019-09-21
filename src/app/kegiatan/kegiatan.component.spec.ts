import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanComponent } from './kegiatan.component';

describe('KegiatanComponent', () => {
  let component: KegiatanComponent;
  let fixture: ComponentFixture<KegiatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
