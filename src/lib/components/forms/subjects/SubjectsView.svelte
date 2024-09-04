<script lang="ts">
  import "$styles/form.scss";

  import { invoke } from "@tauri-apps/api";
  import { onMount } from "svelte";
  import TableComponent from "$lib/components/tables/TableComponent.svelte";
  import NewSubject from "./NewSubject.svelte";

  // TODO: Cambiar interface por sharedStore desde rust
  interface Subject {
    id: number;
    name: string;
    shorten: string;
    color: string;
    spec: string;
  }

  let data: Subject[] = [];

  // Carga las materias desde la base de datos en rust
  async function getSubjects() {
    const response = await invoke("get_subjects");
    data = response as Subject[];
  }

  onMount(getSubjects);

  // Columnas de la tabla (key es el nombre de la propiedad en la interfaz)
  const columns = [
    { name: "ID", key: "id" },
    { name: "Nombre", key: "name" },
    { name: "Abreviatura", key: "shorten" },
    { name: "Color", key: "color" },
    { name: "Tipo", key: "spec" },
  ];

  const actions = [
    { name: "Editar", action: (item: Subject) => console.log("Edit", item) },
    { name: "Eliminar", action: (item: Subject) => console.log("Delete", item) },
  ];

  let newClicked = false;
  const handleNew = () => {
    newClicked = !newClicked;
  };
</script>

<section class="form-container">
  <span class="title">Materias</span>
  <button on:click={handleNew}>Nueva Materia</button>
  <TableComponent {data} {columns} {actions} />
  {#if newClicked}
    <NewSubject />
  {/if}
</section>
