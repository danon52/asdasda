import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePAge } from './home-page';

describe('HomePAge', () => {
  let component: HomePAge;
  let fixture: ComponentFixture<HomePAge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePAge],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePAge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
