import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionpanelItemComponent } from './actionpanel-item.component';

describe('ActionpanelItemComponent', () => {
  let component: ActionpanelItemComponent;
  let fixture: ComponentFixture<ActionpanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionpanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionpanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
