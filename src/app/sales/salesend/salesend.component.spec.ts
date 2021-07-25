import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesendComponent } from './salesend.component';

describe('SalesendComponent', () => {
  let component: SalesendComponent;
  let fixture: ComponentFixture<SalesendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
