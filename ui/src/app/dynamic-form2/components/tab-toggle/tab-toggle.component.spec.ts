import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabToggleComponent } from './tab-toggle.component';

describe('TabToggleComponent', () => {
  let component: TabToggleComponent;
  let fixture: ComponentFixture<TabToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
