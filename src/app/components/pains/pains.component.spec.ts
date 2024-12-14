import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainsComponent } from './pains.component';

describe('PainsComponent', () => {
  let component: PainsComponent;
  let fixture: ComponentFixture<PainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
