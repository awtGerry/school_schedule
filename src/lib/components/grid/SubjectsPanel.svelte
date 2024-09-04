<script lang="ts">
  import { invoke } from "@tauri-apps/api";
  import { onMount } from "svelte";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";

  interface SubjectItem {
    id: number;
    name: string;
    shorten: string;
    color: string;
    spec: string;
  }

  // let subjects: SubjectItem[] = [];
  export let items: SubjectItem[] = [];

  async function getSubjects() {
    const response = await invoke("get_subjects");
    items = response as SubjectItem[];
  }

  onMount(getSubjects);

  const flipDurationMs = 150;

  const handleConsider = (e: any) => {
    items = e.detail.items;
  };

  const handleFinalize = (e: any) => {
    items = e.detail.items;
  };
</script>

<div>
  <span class="title">Materias</span>
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
    class="items-container"
  >
    {#each items as item (item.id)}
      <div class="subject" style="background-color: {item.color}" animate:flip="{{duration: flipDurationMs}}">
        {item.shorten}
      </div>
    {/each}
  </section>
</div>
