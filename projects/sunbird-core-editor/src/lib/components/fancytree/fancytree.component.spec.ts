import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancytreeComponent } from './fancytree.component';

describe('FancytreeComponent', () => {
  let component: FancytreeComponent;
  let fixture: ComponentFixture<FancytreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancytreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
