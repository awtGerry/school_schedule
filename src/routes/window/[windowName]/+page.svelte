<!--------------------
Cada pagina de la aplicacion se renderiza
y crea una nueva ventana, este componente
simplemente llama a la vista deseada.
---------------------->

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

  import SubjectsView from '$lib/components/forms/subjects/SubjectsView.svelte';
  import TeachersView from '$lib/components/forms/teachers/TeachersView.svelte';

  let view: any;
  switch (data.page) {
    case 'subjects':
      view = SubjectsView;
      break;
    case 'teachers':
      view = TeachersView;
      break;
  }

  /**
    * Carga el tema de la aplicación
  **/
  import { onMount } from "svelte";

  const applySystemTheme = () => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const applyTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      applySystemTheme();
    }
  }

  onMount(() => {
    applyTheme();
  });
</script>

<svelte:component this={view} />
