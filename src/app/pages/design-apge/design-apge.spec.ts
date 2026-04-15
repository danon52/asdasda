import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAPge } from './design-apge';

describe('DesignAPge', () => {
  let component: DesignAPge;
  let fixture: ComponentFixture<DesignAPge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAPge],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignAPge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
