import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwsCreatorComponent } from './tws-creator.component';

describe('TwsCreatorComponent', () => {
  let component: TwsCreatorComponent;
  let fixture: ComponentFixture<TwsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwsCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
