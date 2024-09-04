// Tauri doesn't have a Node.js server to do proper SSR
// so we will use adapter-static to prerender the app (SSG)
// See: https://v2.tauri.app/start/frontend/sveltekit/ for more info
export const prerender = true;
export const ssr = false;

/* TODO: Hay un error en este archivo, por alguna razon despues
          de recompilar el proyecto al abrir una pagina se abre la misma. */
import "$styles/form.scss";
