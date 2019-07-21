import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetidorManagerComponent } from './competidor-manager.component';

describe('CompetidorManagerComponent', () => {
  let component: CompetidorManagerComponent;
  let fixture: ComponentFixture<CompetidorManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetidorManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetidorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
