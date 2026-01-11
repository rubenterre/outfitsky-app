import { w as attr_style, x as ensure_array_like, y as attr_class, z as head } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { a as attr } from "../../chunks/attributes.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { e as escape_html } from "../../chunks/escaping.js";
const favicon = "/_app/immutable/assets/favicon.D8uzqMrN.svg";
function Menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let active = 0;
    const items = [
      { href: "/", icon: "/assets/home.svg", label: "Inicio" },
      {
        href: "/profile",
        icon: "/assets/profile_icon.svg",
        label: "Perfíl"
      },
      {
        href: "/locations",
        icon: "/assets/locations_icon.svg",
        label: "Ciudades"
      },
      {
        href: "/shop",
        icon: "/assets/shop_icon.svg",
        label: "Tienda"
      }
    ];
    $$renderer2.push(`<div class="menu svelte-15gydnd"><div class="menu__container svelte-15gydnd"><div class="menu__highlight svelte-15gydnd"${attr_style(`--index:${active}`)}></div> <!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class("menu__a svelte-15gydnd", void 0, { "menu__a--active": i === active })}><img class="menu__img svelte-15gydnd"${attr("src", item.icon)}${attr("alt", item.label)}/> <p class="menu__p svelte-15gydnd">${escape_html(item.label)}</p></a>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <!---->`);
    {
      $$renderer2.push(`<div>`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!----> `);
    Menu($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
