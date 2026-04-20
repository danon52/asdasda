import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostsPage } from './new-posts-page';

describe('NewPostsPage', () => {
  let component: NewPostsPage;
  let fixture: ComponentFixture<NewPostsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPostsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
