import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHomePageComponent } from './slider-home-page.component';

describe('SliderHomePageComponent', () => {
  let component: SliderHomePageComponent;
  let fixture: ComponentFixture<SliderHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
