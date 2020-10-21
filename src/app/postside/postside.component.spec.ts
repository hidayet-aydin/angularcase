import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsideComponent } from './postside.component';

describe('PostsideComponent', () => {
  let component: PostsideComponent;
  let fixture: ComponentFixture<PostsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
