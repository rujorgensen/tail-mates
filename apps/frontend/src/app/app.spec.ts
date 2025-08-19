import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
			],
		}).compileComponents();
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		expect(fixture).toBeDefined();
	});
});
