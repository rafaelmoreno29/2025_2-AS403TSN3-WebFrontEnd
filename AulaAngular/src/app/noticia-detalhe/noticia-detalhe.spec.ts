import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetalhe } from './noticia-detalhe';

describe('NoticiaDetalhe', () => {
  let component: NoticiaDetalhe;
  let fixture: ComponentFixture<NoticiaDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
