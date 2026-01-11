
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/legal" | "/locations" | "/privacidade" | "/profile" | "/shop" | "/terminos";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/legal": Record<string, never>;
			"/locations": Record<string, never>;
			"/privacidade": Record<string, never>;
			"/profile": Record<string, never>;
			"/shop": Record<string, never>;
			"/terminos": Record<string, never>
		};
		Pathname(): "/" | "/legal" | "/legal/" | "/locations" | "/locations/" | "/privacidade" | "/privacidade/" | "/profile" | "/profile/" | "/shop" | "/shop/" | "/terminos" | "/terminos/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/assets/.DS_Store" | "/assets/cart_icon.svg" | "/assets/chevron-down.svg" | "/assets/cities/ACoruna.avif" | "/assets/cities/ACoruna.png" | "/assets/cities/Barcelona.avif" | "/assets/cities/Barcelona.png" | "/assets/cities/Bilbao.avif" | "/assets/cities/Bilbao.png" | "/assets/cities/Las_Palmas.avif" | "/assets/cities/Las_Palmas.png" | "/assets/cities/Lugo.avif" | "/assets/cities/Lugo.png" | "/assets/cities/Madrid.avif" | "/assets/cities/Madrid.png" | "/assets/cities/Malaga.avif" | "/assets/cities/Malaga.png" | "/assets/cities/Murcia.avif" | "/assets/cities/Murcia.png" | "/assets/cities/Pontevedra.avif" | "/assets/cities/Pontevedra.png" | "/assets/cities/Santiago_de_Compostela.avif" | "/assets/cities/Santiago_de_Compostela.png" | "/assets/cities/Sevilla.avif" | "/assets/cities/Sevilla.png" | "/assets/cities/Valencia.avif" | "/assets/cities/Valencia.png" | "/assets/cities/Valladolid.avif" | "/assets/cities/Valladolid.png" | "/assets/cities/Vigo.avif" | "/assets/cities/Vigo.png" | "/assets/cities/Vilagarcia_de_Arousa.avif" | "/assets/cities/Vilagarcia_de_Arousa.png" | "/assets/cities/Zaragoza.avif" | "/assets/cities/Zaragoza.png" | "/assets/favicons/favicon_152.png" | "/assets/favicons/favicon_16.png" | "/assets/favicons/favicon_167.png" | "/assets/favicons/favicon_180.png" | "/assets/favicons/favicon_192.png" | "/assets/favicons/favicon_48.png" | "/assets/favicons/favicon_512.png" | "/assets/favicons/favicon_96.png" | "/assets/fondoToday.png" | "/assets/home.svg" | "/assets/locations_icon.svg" | "/assets/minicities/ACoruna.png" | "/assets/minicities/Barcelona.png" | "/assets/minicities/Bilbao.png" | "/assets/minicities/Las_Palmas.png" | "/assets/minicities/Lugo.png" | "/assets/minicities/Madrid.png" | "/assets/minicities/Malaga.png" | "/assets/minicities/Murcia.png" | "/assets/minicities/Pontevedra.png" | "/assets/minicities/Santiago_de_Compostela.png" | "/assets/minicities/Sevilla.png" | "/assets/minicities/Valencia.png" | "/assets/minicities/Valladolid.png" | "/assets/minicities/Vigo.png" | "/assets/minicities/Vilagarcia_de_Arousa.png" | "/assets/minicities/Zaragoza.png" | "/assets/outfitSky_logo.svg" | "/assets/products/accesories/gloves/acc-003/acc-003-1-HellyHansen-guantes.jpg" | "/assets/products/accesories/head/acc-005/acc-005-1-TheNorthFace_Gorro.jpg" | "/assets/products/accesories/head/acc-007/acc-007-1-Levis_gorra.jpg" | "/assets/products/accesories/head/acc-009/acc-009-1-Addidas_gorra.jpg" | "/assets/products/accesories/head/acc-010/acc-010-1-TheNorthFace_gorro.jpg" | "/assets/products/accesories/head/acc-011/acc-011-1-Salomon_gorro.jpg" | "/assets/products/accesories/hidratation/acc-006/acc006-1-Stanley-botella.jpg" | "/assets/products/accesories/neckwarmer/acc-004/acc-004-1-HellyHansen_Merino_cuello.jpg" | "/assets/products/accesories/raincover/acc-002/acc-002-1-Deuter-funda-mochila.jpg" | "/assets/products/accesories/sunglasses/acc-008/acc-009-1-Columbia_gafas_sol.jpg" | "/assets/products/accesories/umbrella/acc-001/acc-001-1-Samsonite_Rain_Pro_3.jpg" | "/assets/products/accesories/umbrella/acc-001/acc-001-2-Samsonite_Rain_Pro_3.jpg" | "/assets/products/accesories/umbrella/acc-001/acc-001-3-Samsonite_Rain_Pro_3.jpg" | "/assets/profile_icon.svg" | "/assets/search_icon.svg" | "/assets/shop_icon.svg" | "/assets/sun-light.svg" | "/assets/weather/01d.gif" | "/assets/weather/01n.gif" | "/assets/weather/02d.gif" | "/assets/weather/02n.gif" | "/assets/weather/03d.gif" | "/assets/weather/03n.gif" | "/assets/weather/04d.gif" | "/assets/weather/04n.gif" | "/assets/weather/09d.gif" | "/assets/weather/09n.gif" | "/assets/weather/10d.gif" | "/assets/weather/10n.gif" | "/assets/weather/11d.gif" | "/assets/weather/11n.gif" | "/assets/weather/13d.gif" | "/assets/weather/13n.gif" | "/assets/weather/50d.gif" | "/assets/weather/50n.gif" | "/assets/weather/unknown.gif" | "/fonts/Montserrat-VariableFont_wght.ttf" | "/manifest.webmanifest" | "/robots.txt" | string & {};
	}
}