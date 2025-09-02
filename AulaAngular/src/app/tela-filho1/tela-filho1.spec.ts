import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilho1 } from './tela-filho1';

describe('TelaFilho1', () => {
  let component: TelaFilho1;
  let fixture: ComponentFixture<TelaFilho1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaFilho1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFilho1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
