import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilho2 } from './tela-filho2';

describe('TelaFilho2', () => {
  let component: TelaFilho2;
  let fixture: ComponentFixture<TelaFilho2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaFilho2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFilho2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
