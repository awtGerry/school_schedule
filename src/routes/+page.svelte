<!-- Vista de la pizarra para los horarios -->

<script lang="ts">
  import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<main>
  <Navbar />
  <div class="content">
    <h1>Horarios</h1>
    <p>En esta sección podrás visualizar los horarios de los grupos, materias, maestros y salones.</p>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
  }

  .content {
    padding: 1.5rem;
    overflow: auto;
  }
</style>
