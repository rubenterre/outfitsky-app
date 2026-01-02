<script>
  let { city } = $props();
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";

  import locations from "$lib/data/locations.json";

  const cidades = locations;

  function selectCity(lat, lon, img, name) {
    city = { lat, lon, img, name };

    const params = new URLSearchParams({ lat, lon, img, name });
    goto(`/?${params.toString()}`);
  }
</script>

<section class="locations">
  <div class="locations__hero">
    <img
      src="/assets/outfitSky_logo.svg"
      alt="Logo de OutfitSky"
      class="locations__logo"
    />
    <div class="locations__title">
      <h2 class="locations__h2">OutfitSky</h2>
      <p class="locations__p">La app del tiempo que te viste</p>
    </div>
  </div>

  <div class="locations__container">
    {#each cidades as c}
      <button
        type="button"
        class="locations__button"
        on:click={() => selectCity(c.lat, c.lon, c.img, c.name)}
      >
        <img class="locations__icon" src={c.icon} alt={c.name} />
        <h4 class="locations__h4">{c.name}</h4>
      </button>
    {/each}
  </div>
</section>

<Footer></Footer>

<style>
  .locations {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .locations__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .locations__logo {
    min-width: 106px;
  }

  .locations__title {
    text-align: center;
  }

  .locations__h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .locations__p {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .locations__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    width: 100%;
  }

  .locations__button {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    height: 60px;
    padding-left: 30px;
    background: linear-gradient(
      180deg,
      rgba(80, 80, 80, 0.48) 0%,
      rgba(1, 5, 8, 1) 100%
    );
  }

  .locations__icon {
    max-height: 36px;
  }

  .locations__h4 {
    color: var(--color-secondary);
    font-size: 1rem;
  }
</style>
