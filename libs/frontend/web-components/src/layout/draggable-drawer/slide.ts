export class SlideY {
	private startY: number | null = null;
	private deltaY: number | null = null;
	private startTime: number | null = null;
	private lastY: number | null = null;
	private lastTime: number | null = null;
	private readonly onMove: (event: any) => void;
	private readonly onRelease: (event: any) => void;

	constructor(
		private readonly _handle: Element,
		private readonly _hostElement: Element,
		private readonly cbs: {
			dragged?: (dragPixels: number) => void;
			released?: (inertia: number) => void;
		},
	) {
		this._handle.setAttribute('style', 'touch-action: none;');
		this.onMove = this.moved.bind(this);
		this.onRelease = this.released.bind(this);
		this._handle.addEventListener('pointerdown', this.pressed.bind(this), {
			passive: true,
		});
	}

	private pressed(
		event: any,
	): void {
		this.startY = event.clientY;
		this.startTime = performance.now();
		this.lastY = this.startY;
		this.lastTime = this.startTime;

		document.addEventListener('pointermove', this.onMove, {
			passive: true,
		});
		this._handle.addEventListener('pointerup', this.onRelease, {
			passive: true,
		});
		this._handle.addEventListener('pointercancel', this.onRelease, {
			passive: true,
		});
		this._hostElement.addEventListener('mouseleave', this.onRelease, {
			passive: true,
		});
	}

	private moved(
		event: any,
	): void {
		if (this.startY !== null) {
			const currentTime = performance.now();

			// Save last movement to calculate velocity
			this.lastY = event.clientY;
			this.lastTime = currentTime;
			this.deltaY = event.clientY - this.startY;

			this.cbs.dragged && this.cbs.dragged(this.deltaY * -1);
		}
	}

	private released(
		
	): void {
		let inertia = 0;

		if (
			this.lastY !== null &&
			this.lastTime !== null &&
			this.startY !== null &&
			this.startTime !== null
		) {
			const deltaY = this.lastY - this.startY;
			const deltaTime = this.lastTime - this.startTime;
			if (deltaTime > 0) {
				inertia = -(deltaY / deltaTime); // px/ms, negate to match direction
			}
		}

		this.cbs.released && this.cbs.released(Math.round(inertia * 100) / 100);

		document.removeEventListener('pointermove', this.onMove);
		this._handle.removeEventListener('pointerup', this.onRelease);
		this._handle.removeEventListener('pointercancel', this.onRelease);
		this._hostElement.removeEventListener('mouseleave', this.onRelease);

		this.startY = null;
		this.startTime = null;
		this.lastY = null;
		this.lastTime = null;
	}
}
