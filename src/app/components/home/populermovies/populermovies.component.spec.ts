import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulermoviesComponent } from './populermovies.component';

describe('PopulermoviesComponent', () => {
  let component: PopulermoviesComponent;
  let fixture: ComponentFixture<PopulermoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulermoviesComponent]
    });
    fixture = TestBed.createComponent(PopulermoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
