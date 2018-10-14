import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIntroComponent } from './slider-intro.component';

describe('SliderIntroComponent', () => {
  let component: SliderIntroComponent;
  let fixture: ComponentFixture<SliderIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
