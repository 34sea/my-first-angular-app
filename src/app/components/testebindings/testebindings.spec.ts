import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testebindings } from './testebindings';

describe('Testebindings', () => {
  let component: Testebindings;
  let fixture: ComponentFixture<Testebindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testebindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testebindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
