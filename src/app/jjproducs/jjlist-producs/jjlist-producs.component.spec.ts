import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjlistProducsComponent } from './jjlist-producs.component';

describe('JjlistProducsComponent', () => {
  let component: JjlistProducsComponent;
  let fixture: ComponentFixture<JjlistProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JjlistProducsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JjlistProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
