import { x as ensure_array_like } from "../../../chunks/index2.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { l as locations } from "../../../chunks/locations.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const cities = locations;
    let selectedCity = cities[0];
    let selectedGender = "";
    $$renderer2.push(`<section class="shop svelte-a8yt2h"><div class="shop__filters svelte-a8yt2h"><button class="shop__filter svelte-a8yt2h">Filtros</button></div> <div class="shop__hero svelte-a8yt2h"><h2 class="shop__h2 svelte-a8yt2h">Sugerencia de outfit para hoy</h2> <div class="shop__select-wrapper svelte-a8yt2h"><label class="shop__label svelte-a8yt2h">Escoge una ciudad: <select class="shop__select svelte-a8yt2h"><!--[-->`);
    const each_array = ensure_array_like(cities);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let city = each_array[$$index];
      $$renderer2.option({ value: city.name, selected: city.name === selectedCity.name }, ($$renderer3) => {
        $$renderer3.push(`${escape_html(city.name)}`);
      });
    }
    $$renderer2.push(`<!--]--></select></label> <label class="shop__label svelte-a8yt2h">Escoge un género: `);
    $$renderer2.select(
      { class: "shop__select", value: selectedGender },
      ($$renderer3) => {
        $$renderer3.option({ value: "" }, ($$renderer4) => {
          $$renderer4.push(`Selecciona un género...`);
        });
        $$renderer3.option({ value: "hombre" }, ($$renderer4) => {
          $$renderer4.push(`Hombre`);
        });
        $$renderer3.option({ value: "mujer" }, ($$renderer4) => {
          $$renderer4.push(`Mujer`);
        });
        $$renderer3.option({ value: "unisex" }, ($$renderer4) => {
          $$renderer4.push(`Unisex`);
        });
      },
      "svelte-a8yt2h"
    );
    $$renderer2.push(`</label></div> <p class="shop__p svelte-a8yt2h">Atuendo recomendado según el tiempo actual en <span class="shop__span svelte-a8yt2h">${escape_html(selectedCity.name)}</span></p> <div class="shop__hero-outfit svelte-a8yt2h">`);
    {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p>No hay sugerencias disponibles con el catálogo actual.</p>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
