import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListingComponent } from './topic-listing.component';

describe('TopicListingComponent', () => {
  let component: TopicListingComponent;
  let fixture: ComponentFixture<TopicListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
