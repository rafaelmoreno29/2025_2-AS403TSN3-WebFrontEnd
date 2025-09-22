import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularMedia } from './calcular-media';

describe('CalcularMedia', () => {
  let component: CalcularMedia;
  let fixture: ComponentFixture<CalcularMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcularMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
