import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancytreeButtonsComponent } from './fancytree-buttons.component';

describe('FancytreeButtonsComponent', () => {
  let component: FancytreeButtonsComponent;
  let fixture: ComponentFixture<FancytreeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancytreeButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancytreeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
