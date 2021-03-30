import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluralsClicksComponent } from './plurals-clicks.component';

describe('PluralsClicksComponent', () => {
  let component: PluralsClicksComponent;
  let fixture: ComponentFixture<PluralsClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluralsClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluralsClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
