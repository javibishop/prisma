import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetidorEditComponent } from './competidor-edit.component';

describe('CompetidorEditComponent', () => {
  let component: CompetidorEditComponent;
  let fixture: ComponentFixture<CompetidorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetidorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetidorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
