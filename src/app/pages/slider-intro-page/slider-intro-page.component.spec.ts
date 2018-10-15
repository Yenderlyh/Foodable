import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIntroPageComponent } from './slider-intro-page.component';

describe('SliderIntroPageComponent', () => {
  let component: SliderIntroPageComponent;
  let fixture: ComponentFixture<SliderIntroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderIntroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
