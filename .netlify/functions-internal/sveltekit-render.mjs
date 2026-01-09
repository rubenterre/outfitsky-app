import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/cart_icon.svg","assets/chevron-down.svg","assets/cities/ACoruna.png","assets/cities/Barcelona.png","assets/cities/Bilbao.png","assets/cities/Las_Palmas.png","assets/cities/Lugo.png","assets/cities/Madrid.png","assets/cities/Malaga.png","assets/cities/Murcia.png","assets/cities/Pontevedra.png","assets/cities/Santiago_de_Compostela.png","assets/cities/Sevilla.png","assets/cities/Valencia.png","assets/cities/Valladolid.png","assets/cities/Vigo.png","assets/cities/Vilagarcia_de_Arousa.png","assets/cities/Zaragoza.png","assets/favicons/favicon_152.png","assets/favicons/favicon_16.png","assets/favicons/favicon_167.png","assets/favicons/favicon_180.png","assets/favicons/favicon_192.png","assets/favicons/favicon_48.png","assets/favicons/favicon_512.png","assets/favicons/favicon_96.png","assets/fondoToday.png","assets/locations_icon.svg","assets/minicities/ACoruna.png","assets/minicities/Barcelona.png","assets/minicities/Bilbao.png","assets/minicities/Las_Palmas.png","assets/minicities/Lugo.png","assets/minicities/Madrid.png","assets/minicities/Malaga.png","assets/minicities/Murcia.png","assets/minicities/Pontevedra.png","assets/minicities/Santiago_de_Compostela.png","assets/minicities/Sevilla.png","assets/minicities/Valencia.png","assets/minicities/Valladolid.png","assets/minicities/Vigo.png","assets/minicities/Vilagarcia_de_Arousa.png","assets/minicities/Zaragoza.png","assets/outfitSky_logo.svg","assets/products/accesories/gloves/acc-003/acc-003-1-HellyHansen-guantes.jpg","assets/products/accesories/head/acc-005/acc-005-1-TheNorthFace_Gorro.jpg","assets/products/accesories/head/acc-007/acc-007-1-Levis_gorra.jpg","assets/products/accesories/head/acc-009/acc-009-1-Addidas_gorra.jpg","assets/products/accesories/head/acc-010/acc-010-1-TheNorthFace_gorro.jpg","assets/products/accesories/head/acc-011/acc-011-1-Salomon_gorro.jpg","assets/products/accesories/hidratation/acc-006/acc006-1-Stanley-botella.jpg","assets/products/accesories/neckwarmer/acc-004/acc-004-1-HellyHansen_Merino_cuello.jpg","assets/products/accesories/raincover/acc-002/acc-002-1-Deuter-funda-mochila.jpg","assets/products/accesories/sunglasses/acc-008/acc-009-1-Columbia_gafas_sol.jpg","assets/products/accesories/umbrella/acc-001/acc-001-1-Samsonite_Rain_Pro_3.jpg","assets/products/accesories/umbrella/acc-001/acc-001-2-Samsonite_Rain_Pro_3.jpg","assets/products/accesories/umbrella/acc-001/acc-001-3-Samsonite_Rain_Pro_3.jpg","assets/profile_icon.svg","assets/search_icon.svg","assets/shop_icon.svg","assets/sun-light.svg","assets/weather/01d.gif","assets/weather/01n.gif","assets/weather/02d.gif","assets/weather/02n.gif","assets/weather/03d.gif","assets/weather/03n.gif","assets/weather/04d.gif","assets/weather/04n.gif","assets/weather/09d.gif","assets/weather/09n.gif","assets/weather/10d.gif","assets/weather/10n.gif","assets/weather/11d.gif","assets/weather/11n.gif","assets/weather/13d.gif","assets/weather/13n.gif","assets/weather/50d.gif","assets/weather/50n.gif","assets/weather/unknown.gif","fonts/Montserrat-VariableFont_wght.ttf","manifest.webmanifest","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".ttf":"font/ttf",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B--m2Rzk.js",app:"_app/immutable/entry/app.BA44Sv2W.js",imports:["_app/immutable/entry/start.B--m2Rzk.js","_app/immutable/chunks/BNjJgs1Y.js","_app/immutable/chunks/DDYsyxXU.js","_app/immutable/chunks/B3UQdWVL.js","_app/immutable/entry/app.BA44Sv2W.js","_app/immutable/chunks/DDYsyxXU.js","_app/immutable/chunks/eykuBD1B.js","_app/immutable/chunks/ccsuResx.js","_app/immutable/chunks/B3UQdWVL.js","_app/immutable/chunks/vf04tmx9.js","_app/immutable/chunks/Dtv2zm7k.js","_app/immutable/chunks/NxMqY7HQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/legal",
				pattern: /^\/legal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/locations",
				pattern: /^\/locations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/privacidade",
				pattern: /^\/privacidade\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/terminos",
				pattern: /^\/terminos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
