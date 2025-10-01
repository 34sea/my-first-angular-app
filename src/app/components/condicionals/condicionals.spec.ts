import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condicionals } from './condicionals';

describe('Condicionals', () => {
  let component: Condicionals;
  let fixture: ComponentFixture<Condicionals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condicionals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condicionals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
