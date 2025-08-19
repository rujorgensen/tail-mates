import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FixedBottomMenuLayoutComponent } from './fixed-bottom-menu-layout.component';

describe('FixedBottomMenuLayoutComponent', () => {
  let component: FixedBottomMenuLayoutComponent;
  let fixture: ComponentFixture<FixedBottomMenuLayoutComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ FixedBottomMenuLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedBottomMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
