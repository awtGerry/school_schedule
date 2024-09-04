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

  if (data.page === 'subjects') {
    view = SubjectsView;
  } else if (data.page === 'teachers') {
    view = TeachersView;
  }

</script>

<svelte:component this={view} />
