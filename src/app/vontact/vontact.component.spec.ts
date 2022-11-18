import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VontactComponent } from './vontact.component';

describe('VontactComponent', () => {
  let component: VontactComponent;
  let fixture: ComponentFixture<VontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
