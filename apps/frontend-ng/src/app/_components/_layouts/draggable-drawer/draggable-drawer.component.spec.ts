import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDrawerComponent } from './draggable-drawer.component';

describe('DraggableDrawerComponent', () => {
	let component: DraggableDrawerComponent;
	let fixture: ComponentFixture<DraggableDrawerComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [
				DraggableDrawerComponent,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DraggableDrawerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
