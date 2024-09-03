<script lang="ts">
  import "$styles/nav.scss"; import NavbarItem from "./NavbarItem.svelte";
  import { WebviewWindow } from "@tauri-apps/api/window";
  import ToggleDarkTheme from "../buttons/ToggleDarkTheme.svelte";

  let isCollapsed = false;
  const collapseSidebar = () => {
    isCollapsed = !isCollapsed;
  };

  // Open a new window if user selects (grupos | materias | maestros | salones)
  async function createWindow(windowName: string) {
    const win = new WebviewWindow("ss_window", {
      // NOTE: Testing with VistaMaterias
      url: "../../../public/window/" + windowName + ".html",
      title: "School Roster",
      width: 1000,
      height: 800,
      resizable: true
    });
    await win.show();
  }
</script>

<nav class="sidebar" class:collapsed={isCollapsed}>
  <div class="logo">
    <img src="/icons/rooster.png" alt="Logo" />
    {#if !isCollapsed}
      <h1>School Roster</h1>
    {/if}
  </div>

  <!-- Navbar Items -->
  <NavbarItem {isCollapsed} {createWindow} />

  <!-- Toggle Button -->
  <ToggleDarkTheme />
  <button class="toggle-btn" on:click={collapseSidebar}>
    <img
      style="width: 1.5rem; height: 1.5rem;"
      src={isCollapsed ? "/icons/caret-right.svg" : "/icons/caret-left.svg"}
      alt="Toggle Sidebar"
    />
  </button>
</nav>
