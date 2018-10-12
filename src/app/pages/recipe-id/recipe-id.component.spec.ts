import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeIdComponent } from './recipe-id.component';

describe('RecipeIdComponent', () => {
  let component: RecipeIdComponent;
  let fixture: ComponentFixture<RecipeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
