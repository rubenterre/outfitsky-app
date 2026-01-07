<script>
    let { outfits = [] } = $props();
</script>

<div class="shop__outfits outfits">
  {#if !outfits.length}
    <p class="outfits__empty">Non hai looks para as condicións actuais.</p>
  {:else}
    {#each outfits as outfit}
      <div class="outfits__container">
        <div class="outfits__card">
          <div class="outfits__title">
            <h2 class="outfits__h2">{outfit.nombre}</h2>
          </div>
          <div class="outfits__clothes">
            {#each outfit.items as item}
              <a href={item.url_externa} target="_blank">
                <img src={item.imagen} alt={item.nombre} class="outfits__img" />
              </a>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  /* Cards outfits */

  .outfits {
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0px 27px;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .outfits__title {
    padding: 1rem;
    display: flex;
    justify-content: start;
    width: 100%;
  }

  .outfits__h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .outfits .outfits__container {
    width: 268px;
    height: 420px;
    border-radius: 27px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-tertiary);
    display: inline-block;
    margin-right: 10px;
  }

  .outfits__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
  }

  .outfits__clothes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }

  .outfits__img {
    width: 118px;
    height: 161px;
    border-radius: 17px;
  }
</style>
