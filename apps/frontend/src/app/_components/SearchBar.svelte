<script>
let query = '';
</script>

<style>
	.searchbar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		backdrop-filter: blur(12px);
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	.searchbar input {
		flex: 1;
		background: transparent;
		border: none;
		outline: none;
		color: white;
		font-size: 1rem;
	}

	.icon {
		width: 20px;
		height: 20px;
		cursor: pointer;
		fill: white;
		opacity: 0.8;
		transition: opacity 0.2s ease;
	}

	.icon:hover {
		opacity: 1;
	}
</style>

<div class="searchbar">
	<input type="text" bind:value={query} placeholder="Search..." />

	<!-- Magnifying Glass Icon -->
	<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
		></path>
	</svg>

	<!-- Burger Menu Icon -->
	<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"></path>
	</svg>
</div>
