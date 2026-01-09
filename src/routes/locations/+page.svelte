<script>
  let { city } = $props();
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import locations from "$lib/data/locations.json";

  const cidades = locations;

  let favoriteCityName = $state(null);

  // Cargar ciudad favorita desde localStorage
$effect(() => {
  if (typeof window === 'undefined') return;
  const stored = window.localStorage.getItem('favoriteCity');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      favoriteCityName = parsed.name;
    } catch {
      favoriteCityName = null;
    }
  }
});


  function selectCity(lat, lon, img, name) {
    city = { lat, lon, img, name };

    const params = new URLSearchParams({
      lat: String(lat),
      lon: String(lon),
      img,
      name,
    });

    goto(`/?${params.toString()}`);
  }

function toggleFavorite(name) {
  if (typeof window === 'undefined') return;

  const cityData = cidades.find((c) => c.name === name);

  if (!cityData) return;

  if (favoriteCityName === name) {
    favoriteCityName = null;
    window.localStorage.removeItem('favoriteCity');
  } else {
    favoriteCityName = name;
    window.localStorage.setItem(
      'favoriteCity',
      JSON.stringify({
        name: cityData.name,
        lat: cityData.lat,
        lon: cityData.lon,
        img: cityData.img
      })
    );
  }
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
    <div class="locations__info">
      <img class="locations__icon" src={c.icon} alt={c.name} />
      <h4 class="locations__h4">{c.name}</h4>
    </div>

    <span
      class="locations__favorite"
      role="button"
      tabindex="0"
      aria-label={favoriteCityName === c.name
        ? 'Quitar ' + c.name + ' de favoritas'
        : 'Marcar ' + c.name + ' como favorita'}
      on:click={(event) => {
        event.stopPropagation();
        toggleFavorite(c.name);
      }}
      on:keydown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopPropagation();
          toggleFavorite(c.name);
        }
      }}
    >
      {favoriteCityName === c.name ? '★' : '☆'}
    </span>
  </button>
{/each}
  </div>
</section>

<Footer />

<style>
  .locations {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
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

/* Estrella de favoritos */
.locations__button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 27px;
  height: 60px;
  padding: 0 18px 0 30px;
  background: linear-gradient(
    180deg,
    rgba(80, 80, 80, 0.48) 0%,
    rgba(1, 5, 8, 1) 100%
  );
}

.locations__info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.locations__favorite {
  color: var(--color-primary);
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.locations__favorite:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.locations__favorite:hover {
  transform: scale(1.1);
}

</style>
