<script lang="ts">
  // Checar en localStorage el tema del usuario
  let isDarkMode = localStorage.getItem("theme") === "dark";

  // Función para cambiar el tema dependiendo del actual
  const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark", isDarkMode);
    // Guardar el tema en localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  // Aplicar el tema al cargar la página
  if (isDarkMode) {
    document.body.classList.add("dark");
  }
</script>

<button on:click={toggleDarkMode}>
  {isDarkMode ? "Light" : "Dark"} mode
</button>
