<script lang="ts">
  import SearchBar from "../components/SearchBar.svelte";
  import NuEdEl from "../components/NuEdEl.svelte";
  // import TableForm from "../components/TableForm.svelte";
  import Teachers from "../../lib/Teachers.svelte";
</script>

<main style="margin-top:180px;">
  <div class="container">
    <div style="width: 30%; display:flex; flex-direction:column">
      <div style="display: flex; flex-direction:row">
        <img src="/logicirculo.png" alt="" />
        <h1>Maestros</h1>
      </div>
      <div
        style="display: block; height:1px; width:150%; background-color:black"
      ></div>
      <div>
        <SearchBar />
      </div>
      <div
        style="display: flex; width:90%; justify-content:flex-start; height:100% "
      >
        <img style="width:35px; align-self:end" src="/antes.svg" alt="" />
      </div>
    </div>

    <div style="margin-left: 10px;" class="card">
      <div>
        <Teachers />
        <!-- <TableForm /> -->
      </div>
    </div>
    <div style="margin-left:10px">
      <NuEdEl />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
    width: 75%;
    margin: 100px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 50px;
    border-radius: 5rem;
  }
  h1 {
    color: var(--azulp);
    font-size: 28px;
  }

  .card {
    background-color: #ffffff;
    height: 600px;
    width: 900px;
    display: flex;
    flex-direction: column;
    border-color: #000000;
    border: 1px solid;
    border-radius: 20px;
    margin-left: 1px;
  }
</style>
