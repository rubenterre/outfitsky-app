import { x as ensure_array_like } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { a as attr } from "../../../chunks/attributes.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { l as locations } from "../../../chunks/locations.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { city } = $$props;
    const cidades = locations;
    let favoriteCityName = null;
    $$renderer2.push(`<section class="locations svelte-hgrkjr"><div class="locations__hero svelte-hgrkjr"><img src="/assets/outfitSky_logo.svg" alt="Logo de OutfitSky" class="locations__logo svelte-hgrkjr"/> <div class="locations__title svelte-hgrkjr"><h2 class="locations__h2 svelte-hgrkjr">OutfitSky</h2> <p class="locations__p svelte-hgrkjr">La app del tiempo que te viste</p></div></div> <div class="locations__container svelte-hgrkjr"><!--[-->`);
    const each_array = ensure_array_like(cidades);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let c = each_array[$$index];
      $$renderer2.push(`<button type="button" class="locations__button svelte-hgrkjr"><div class="locations__info svelte-hgrkjr"><img class="locations__icon svelte-hgrkjr"${attr("src", c.icon)}${attr("alt", c.name)}/> <h4 class="locations__h4 svelte-hgrkjr">${escape_html(c.name)}</h4></div> <span class="locations__favorite svelte-hgrkjr" role="button" tabindex="0"${attr("aria-label", favoriteCityName === c.name ? "Quitar " + c.name + " de favoritas" : "Marcar " + c.name + " como favorita")}>${escape_html(favoriteCityName === c.name ? "★" : "☆")}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
