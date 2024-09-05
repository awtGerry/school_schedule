<script lang="ts">
  import { onMount } from "svelte";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { subjects, loadSubjects, type SubjectItem } from "$lib/modules/entities/subjectsStore";
  import { listen } from "@tauri-apps/api/event";

  onMount(() => {
    loadSubjects(); // Carga las materias desde la base de datos en rust

    // Escucha el evento para actualizar la vista de materias
    listen("subjects_updated", async () => {
      await loadSubjects();
    });
  });

  /* Funcionalidad Drag and Drop */
  const flipDurationMs = 150;
  
  const handleConsider = (e: any) => {
    const updatedItems = e.detail.items;
    // Only update the subjects store if necessary
    subjects.update((currentSubjects) => {
      return currentSubjects.map((subject, index) => updatedItems[index] || subject);
    });
  };

  const handleFinalize = (e: any) => {
    const updatedItems = e.detail.items;
    subjects.update((currentSubjects) => {
      return currentSubjects.map((subject, index) => updatedItems[index] || subject);
    });
  };

  // Funcion para calcular el color de texto que se debe usar en base al color de fondo
  function getContrastColor(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000; // algoritmo para calcular el brillo (YIQ)
    return yiq >= 128 ? "#000000" : "#ffffff"; // TODO: Esto podria usar el color de texto del tema actual
  }
</script>

<div class="subjects-container">
  <span class="title">Materias</span>
  <section
    use:dndzone={{ items: $subjects, flipDurationMs }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
    class="items"
  >
    {#each $subjects as item (item.id)}
      <div
        class="subject"
        style="background-color: {item.color}; color: {getContrastColor(item.color)}"
        animate:flip="{{duration: flipDurationMs}}"
      >
        {item.shorten}
      </div>
    {/each}
  </section>
</div>
