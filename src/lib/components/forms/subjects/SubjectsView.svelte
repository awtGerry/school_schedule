<script lang="ts">
  import "$styles/form.scss";
  import { onMount } from "svelte";
  import TableComponent from "$lib/components/tables/TableComponent.svelte";
  import NewSubject from "./NewSubject.svelte";

  import { subjects, loadSubjects, type SubjectItem } from "$lib/modules/entities/subjectsStore";

  // Carga las materias desde la base de datos en rust
  onMount(loadSubjects);

  // Columnas de la tabla (key es el nombre de la propiedad en la interfaz)
  const columns = [
    { name: "ID", key: "id" },
    { name: "Nombre", key: "name" },
    { name: "Abreviatura", key: "shorten" },
    { name: "Color", key: "color" },
    { name: "Tipo", key: "spec" },
  ];

  const actions = [
    { name: "Editar", action: (item: SubjectItem) => console.log("Edit", item) },
    { name: "Eliminar", action: (item: SubjectItem) => console.log("Delete", item) },
  ];

  let newClicked = false;
  const handleNew = () => {
    newClicked = !newClicked;
  };
</script>

<section class="form-container">
  <span class="title">Materias</span>
  <button on:click={handleNew}>Nueva Materia</button>
  <TableComponent data={$subjects} {columns} {actions} />
  {#if newClicked}
    <NewSubject />
  {/if}
</section>
