import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualThoughtsComponent } from './spiritual-thoughts.component';

describe('SpiritualThoughtsComponent', () => {
  let component: SpiritualThoughtsComponent;
  let fixture: ComponentFixture<SpiritualThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualThoughtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
