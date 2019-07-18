import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetidorListComponent } from './competidor-list.component';

describe('CompetidorListComponent', () => {
  let component: CompetidorListComponent;
  let fixture: ComponentFixture<CompetidorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetidorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetidorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
