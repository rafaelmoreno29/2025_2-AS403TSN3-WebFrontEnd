import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPai } from './tela-pai';

describe('TelaPai', () => {
  let component: TelaPai;
  let fixture: ComponentFixture<TelaPai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaPai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
