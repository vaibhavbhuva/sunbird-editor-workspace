import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFancytreeComponent } from './custom-fancytree.component';

describe('CustomFancytreeComponent', () => {
  let component: CustomFancytreeComponent;
  let fixture: ComponentFixture<CustomFancytreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFancytreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFancytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
