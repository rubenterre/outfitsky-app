<script>
  import products from "$lib/data/products.json";

  const API_KEY = import.meta.env.VITE_META_API_KEY;

import locations from '$lib/data/locations.json';

  const cities = locations;

  let selectedCity = $state(cities[0]);
  let weatherToday = $state(null);
  let recommended = $state([]);
  let loading = $state(false);
  let errorMsg = $state("");
    // Seleccionar género y filtrar productos por género
  let selectedGender = "";

  // cuando cambie selectedCity, cargamos tiempo + outfit
  $effect(async () => {
    if (!selectedCity) return;

    loading = true;
    errorMsg = "";
    weatherToday = null;
    recommended = [];

    const data = await obtenerDatos(selectedCity.lat, selectedCity.lon);
    if (!data) {
      errorMsg = "Erro ao obter os datos do tempo.";
      loading = false;
      return;
    }

    weatherToday = {
      temperature: data.main?.temp ?? 0,
      precipitation: data.rain?.["1h"] ?? data.rain?.["3h"] ?? 0,
      windSpeed: data.wind?.speed ?? 0,
    };

    recommended = getRecommendedProducts(weatherToday);
    loading = false;
  });

  async function obtenerDatos(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao obter os datos do tempo:", error);
      return null;
    }
  }

  function onChangeCity(event) {
    const cityName = event.target.value;
    const city = cities.find((c) => c.name === cityName);
    if (city) selectedCity = city;
  }


function getRecommendedProducts(weather) {
  if (!weather) return [];

  const { temperature, precipitation, windSpeed } = weather;

  let result = products.filter((p) => {
    const [minT, maxT] = p.rango_temperatura;
    return temperature >= minT && temperature <= maxT;
  });

  if (precipitation > 0.5) {
    result = result.filter((p) => p.lluvia === true);
  }

  if (windSpeed >= 25) {
    result = result.filter(
      (p) => p.viento === true || p.tipo === "accesorio"
    );
  }

  // 🔹 Filtro por xénero
  if (selectedGender) {
    result = result.filter(
      (p) => p.genero === selectedGender || p.genero === "unisex"
    );
  }

  const priorityTypes = [
    "abrigo",
    "pantalón",
    "calzado",
    "camiseta",
    "accesorio",
  ];

  result.sort((a, b) => {
    const aIndex = priorityTypes.indexOf(a.tipo);
    const bIndex = priorityTypes.indexOf(b.tipo);
    return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
  });

  return result.slice(0, 6);
}



</script>

<section class="shop">
  <!--   <div class="shop__search">
    <input
      class="shop__input"
      type="search"
      name="buscar"
          id="buscar"
      placeholder="Buscar ropa y complementos"
    />
    <button class="shop__button" type="submit">
      <img
        class="shop__icon-search"
        src="/assets/search_icon.svg"
        alt="Icono de buscar"
      />
    </button>
  </div> 
  -->
  <div class="shop__filters">
    <button class="shop__filter"> Filtros </button>
  </div>

  <div class="shop__hero">
    <h2 class="shop__h2">Sugerencia de outfit para hoy</h2>

    <div class="shop__select-wrapper">
      <label class="shop__label">
        Escoge una ciudad:
        <select class="shop__select" on:change={onChangeCity}>
          {#each cities as city}
            <option
              value={city.name}
              selected={city.name === selectedCity.name}
            >
              {city.name}
            </option>
          {/each}
        </select>
      </label>
         <label class="shop__label">
        Escoge un género:
      <select class="shop__select" bind:value={selectedGender}>
        <option value="">Selecciona un género...</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        <option value="unisex">Unisex</option>
      </select>
         </label>
    </div>

    <p class="shop__p">
      Atuendo recomendado según el tiempo actual en
      <span class="shop__span">{selectedCity.name}</span>
    </p>

    <div class="shop__hero-outfit">
      {#if loading}
        <p>Cargando tiempo y sugerencias...</p>
      {:else if errorMsg}
        <p>{errorMsg}</p>
      {:else if !weatherToday || recommended.length === 0}
        <p>No hay sugerencias disponibles con el catálogo actual.</p>
      {:else}
        {#each recommended as product}
          <div class="shop__card shop__card--hero">
            <div class="shop__img-product">
              <img
                class="shop__img"
                src={product.imagen}
                alt={product.nombre}
              />
            </div>
            <div class="shop__details">
              <div class="shop__header">
                <h3 class="shop__h3">{product.nombre}</h3>
                <p class="shop__brand">{product.marca}</p>
              </div>
              <div class="shop__footer">
                <div class="shop__price">
                  <p class="shop__title">Precio apróx.</p>
                  <h4 class="shop__h4">{product.precio_aproximado}€</h4>
                </div>
                <div class="shop__button-buy">
                  <a href={product.url_externa} class="shop__a--buy">
                    <img
                      src="/assets/cart_icon.svg"
                      alt="Icono de comprar"
                      class="shop__icon-buy"
                    />
                    <p class="shop__buy-text">COMPRAR</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<style>
  .shop {
    width: 100vw;
    padding: 3rem 2rem;
  }

  .shop__search {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    padding: 5px 5px 5px 15px;
    display: flex;
    justify-content: space-between;
  }

  .shop__input {
    background: var(--color-tertiary);
    color: var(--color-secondary);
    border: 0;
    width: 80%;
  }

  .shop__input::placeholder {
    color: var(--color-secondary);
  }

  .shop__button {
    background: var(--color-primary);
    border-radius: 100%;
    width: 41px;
    height: 41px;
  }

  .shop__icon-search {
    height: 18.78px;
  }

  .shop__filters {
    padding: 1.5rem 0px;
  }

  .shop__filter {
    background-color: var(--color-primary);
    color: var(--color-tertiary);
    border-radius: 27px;
    padding: 5px 25px;
  }

  /* Select */
  .shop__select-wrapper {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .shop__label {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .shop__select {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    padding: 5px 40px 5px 15px; /* similar a la search bar */
    background: var(--color-tertiary);
    color: var(--color-secondary);
    font: inherit;
    line-height: 1.4;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-image: url("/assets/chevron-down.svg");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 14px 14px;
  }

  .shop__select:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .shop__hero {
    padding-bottom: 1rem;
  }

  .shop__h2 {
    font-size: 1.3rem;
  }

  .shop__p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .shop__span {
    color: var(--color-primary);
  }

  .shop__hero-outfit {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .shop__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .shop__card {
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
  }

  .shop__img-product {
    width: 130px;
    height: 130px;
    background-color: var(--color-secondary);
    border-radius: 27px;
    aspect-ratio: 1 / 1;
  }

  .shop__img {
    max-width: 100%;
    background-color: var(--color-secondary);
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 17px;
  }

  .shop__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
    width: 100%;
    padding: 5px 0px;
  }

  .shop__header {
    width: 100%;
  }

  .shop__h3 {
    font-size: 1.3ch;
    padding-right: 5px;
  }

  .shop__brand {
    color: var(--color-primary);
    font-size: 0.8rem;
  }

  .shop__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .shop__title {
    color: var(--color-primary);
    font-size: 0.8rem;
  }

  .shop__h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .shop__a--buy {
    background: var(--color-primary);
    border-radius: 17px;
    /*     width: 45px;
    height: 45px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 80px;
    padding: 3px 0px;
  }

  .shop__buy-text {
    color: var(--color-tertiary);
    font-size: 0.8rem;
    font-weight: 600;
  }
</style>
