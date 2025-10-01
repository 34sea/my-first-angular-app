import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConBetweenCom } from './con-between-com';

describe('ConBetweenCom', () => {
  let component: ConBetweenCom;
  let fixture: ComponentFixture<ConBetweenCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConBetweenCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConBetweenCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
