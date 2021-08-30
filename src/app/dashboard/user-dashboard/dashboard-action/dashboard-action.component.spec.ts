import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActionComponent } from './dashboard-action.component';

describe('DashboardActionComponent', () => {
  let component: DashboardActionComponent;
  let fixture: ComponentFixture<DashboardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
