Aplicación web en SvelteKit que recomienda complementos según el tiempo actual de tu ciudad, usando la API de OpenWeatherMap y un pequeño catálogo de accesorios clasificados por clima.

***

## OutfitSky Accessories – Recomendador de complementos según el clima

Aplicación construida con **SvelteKit** que muestra el tiempo actual en distintas ciudades y recomienda un “kit de complementos” (paraguas, gorro, guantes, gafas de sol, etc.) en función de temperatura, lluvia y viento.

### Características

- Selección de ciudad entre varias localizaciones predefinidas (Galicia y otras ciudades).  
- Consumo de **OpenWeatherMap** para obtener:
  - Temperatura actual.  
  - Precipitación reciente.  
  - Velocidad del viento. [1]
- Catálogo de complementos en JSON (`accesories.json`) con:
  - Rango de temperatura recomendado.  
  - Flags de lluvia y viento.  
  - Género (`hombre`, `mujer`, `unisex`).  
- Recomendador que:
  - Filtra productos por rango de temperatura.  
  - Ajusta según lluvia y viento.  
  - Permite filtrar por género manteniendo visibles los productos unisex.  
- Tarjetas de producto con:
  - Imagen local desde `/assets/products/...`.  
  - Precio aproximado.  
  - Enlace externo de compra (ej. Amazon u otras tiendas).  

***

## Tecnologías

- **SvelteKit** (SPA/SSR, runes API).  
- **TypeScript/JavaScript**.  
- **CSS**/SCSS para estilos y maquetación responsive.  
- **OpenWeatherMap API** para datos meteorológicos en tiempo real.
- Datos estáticos en JSON para productos y localizaciones.

***

## Estructura del proyecto

Estructura simplificada de carpetas:

- `src/routes/+page.svelte` – página principal de la app (home/tienda).  
- `src/lib/components/Outfits.svelte` – componente para mostrar conjuntos o kits (si se usa).  
- `src/lib/components/Footer.svelte` – pie de página.  
- `src/lib/data/products.json` (rama antigua, ropa).  
- `src/lib/data/accesories.json` – catálogo actual de complementos.  
- `src/lib/data/locations.json` – listado de ciudades (nombre, lat, lon).  
- `static/assets/` – imágenes de productos, iconos, etc.

***

## Puesta en marcha

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/outfitsky.git
cd outfitsky
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

Crea un archivo `.env.local` en la raíz con:

```bash
VITE_META_API_KEY=TU_API_KEY_DE_OPENWEATHERMAP
```

Puedes obtener una API key gratuita en la web de OpenWeatherMap.

4. Ejecutar en desarrollo:

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

***

## Uso

- Escoge una **ciudad** en el selector.  
- (Opcional) Escoge **género**: se mostrarán productos de ese género y unisex.  
- La app:
  - Llama a OpenWeatherMap para esa localización.  
  - Calcula un conjunto de complementos recomendados.  
  - Muestra fichas con imagen, precio aproximado y botón de compra externa.

***

## Ramas

- `main` – versión actual con complementos (accesorios clima).  
- `archive/tienda-ropa` (o similar) – versión anterior que recomendaba ropa completa según el tiempo.

***

## Futuras mejoras

- Historial de búsqueda / ciudades favoritas. [4]
- Más tipos de producto (home office, viaje, etc.) ligados a condiciones de clima.  
- Internacionalización (es, gl, en).  
- Tests básicos de la lógica de recomendación.

***

## Licencia

```text
MIT License
```

Consulta la documentación de GitHub para buenas prácticas al documentar licencias en proyectos open source.
