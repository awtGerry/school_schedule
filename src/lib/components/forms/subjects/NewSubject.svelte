<script lang="ts">
  import { invoke } from "@tauri-apps/api";
  let name = "";
  let shorten = "";
  let color = "";
  let spec = "Obligatoria";

  // Manda la nueva materia a la base de datos en rust
  async function addSubject() {
    if (!name || !shorten || !color) {
      alert("Por favor, rellene todos los campos");
      return;
    }
    console.log("Adding subject");
    await invoke("create_subject", { name, shorten, color, spec });
    console.log("Subject added");
  }
</script>

<section class="form-container">
  <span class="title">Nueva Materia</span>
  <div class="form">
    <label for="name">Nombre</label>
    <input type="text" id="name" bind:value={name} />
    <label for="shorten">Abreviatura</label>
    <input type="text" id="shorten" bind:value={shorten} />
    <label for="color">Color</label>
    <input type="color" id="color" bind:value={color} />
    <label for="spec">Tipo</label>
    <select id="spec" bind:value={spec}>
      <option value="Obligatoria">Obligatoria</option>
      <option value="Optativa">Optativa</option>
    </select>
    <button on:click={addSubject}>Agregar</button>
  </div>
</section>
