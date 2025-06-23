<script>
const name = 'Svelte';
let count = 0;

function increment() {
	count += 1;
}
</script>

<div class="hello-world">
  <h3>Hello {name}!</h3>
  <p>This is a proof-of-concept Svelte component in Astro.</p>
  <button on:click={increment}>
    Count: {count}
  </button>
</div>

<style>
  .hello-world {
    padding: 1rem;
    border: 2px solid #ff3e00;
    border-radius: 8px;
    background: linear-gradient(
      45deg,
      rgba(255, 62, 0, 0.1),
      rgba(255, 62, 0, 0.05)
    );
    margin: 1rem 0;
    text-align: center;
  }

  h3 {
    color: #ff3e00;
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
  }

  p {
    color: #333;
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
  }

  button:hover {
    background: #e63900;
  }

  button:active {
    background: #cc3300;
  }
</style>
