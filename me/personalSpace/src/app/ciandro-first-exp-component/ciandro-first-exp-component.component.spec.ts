import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiandroFirstExpComponentComponent } from './ciandro-first-exp-component.component';

describe('CiandroFirstExpComponentComponent', () => {
  let component: CiandroFirstExpComponentComponent;
  let fixture: ComponentFixture<CiandroFirstExpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiandroFirstExpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiandroFirstExpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
