<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Menu from '$lib/components/Menu.svelte';
	

  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';

  let { children } = $props();

let showInstallBanner = $state(false);

// Tipo mínimo para el evento beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

let deferredPrompt = $state<BeforeInstallPromptEvent | null>(null);

$effect(() => {
  if (typeof window === 'undefined') return;

  const handleBeforeInstall = (event: Event) => {
    const e = event as BeforeInstallPromptEvent;
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner = true;
  };

  const handleAppInstalled = () => {
    showInstallBanner = false;
    deferredPrompt = null;
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstall);
  window.addEventListener('appinstalled', handleAppInstalled);

  // cleanup
  return () => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    window.removeEventListener('appinstalled', handleAppInstalled);
  };
});

async function onInstallClick() {
  if (!deferredPrompt) return;

  await deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === 'accepted') {
    showInstallBanner = false;
    deferredPrompt = null;
  } else {
    showInstallBanner = false;
  }
}

function onDismiss() {
  showInstallBanner = false;
}

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if showInstallBanner}
  <div class="pwa-banner">
    <p class="pwa-banner__text">
      ¿Quieres instalar OutfitSky en tu dispositivo para acceder más rápido?
    </p>
    <div class="pwa-banner__actions">
      <button class="pwa-banner__button-primary" on:click={onInstallClick}>
        Instalar
      </button>
      <button class="pwa-banner__button-secondary" on:click={onDismiss}>
        Ahora no
      </button>
    </div>
  </div>
{/if}


{#key $page.url.pathname}
  <div in:fade={{ duration: 400 }}>

{@render children()}
  </div>
{/key}


<Menu></Menu>

<style>

:global(*) {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:global(html){
	font-size: 14px;
	scroll-behavior: smooth;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

:root{
	--font-primary: Montserrat;
	--color-primary: #ECC988;
	--color-secondary: #FFFFFF;
	--color-tertiary: #010508;

}

:global(body) {
 background: var(--color-tertiary) ;
 color: var(--color-secondary) ;
 -webkit-font-smoothing: antialiased;
}

:global(body, input, button) {
 font-family: var(--font-primary);
}

:global(button) {
 cursor: pointer;
}

:global(.pwa-banner) {
  position: fixed;
  left: 50%;
  top: 8rem;
  transform: translateX(-50%);
  z-index: 1000;

  max-width: 420px;
  width: calc(100% - 2rem);
  padding: 0.9rem 1rem;

  background: var(--color-tertiary);
  border: 1px solid var(--color-primary);
  border-radius: 27px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  gap: 0.75rem;

  backdrop-filter: blur(10px);
}

:global(.pwa-banner__text) {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.3;
}

:global(.pwa-banner__actions) {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

:global(.pwa-banner__button-primary,
.pwa-banner__button-secondary) {
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
}

:global(.pwa-banner__button-primary) {
  background-color: var(--color-primary);
  color: var(--color-tertiary);
  border-color: var(--color-primary);
}

:global(.pwa-banner__button-primary:hover) {
  filter: brightness(1.05);
}

:global(.pwa-banner__button-secondary) {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

:global(.pwa-banner__button-secondary:hover) {
  background-color: rgba(148, 163, 184, 0.08);
}

/* Layout horizontal en pantallas grandes */
@media (min-width: 640px) {
  .pwa-banner__actions {
    flex-direction: row;
  }
}

</style>