import { TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { provideRouter } from '@angular/router';

describe('Sign up', () => {
	beforeEach(async () => {

		await TestBed.configureTestingModule({
			imports: [
				SignUpComponent,
			],
			providers: [
				// ✅ Provide ActivatedRoute
				provideRouter([]),
			],
		}).compileComponents();
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(SignUpComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h1')?.textContent).toContain(
			'Join Tail Mates',
		);
	});
});
