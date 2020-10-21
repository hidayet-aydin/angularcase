import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesideComponent } from './tableside.component';

describe('TablesideComponent', () => {
  let component: TablesideComponent;
  let fixture: ComponentFixture<TablesideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
