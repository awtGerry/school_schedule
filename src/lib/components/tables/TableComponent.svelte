<script lang="ts">
  import "$styles/table.scss";

  export let data: any[] = [];
  export let columns: any[] = [];
  export let actions: any[] = [];
</script>

<table>
  <thead>
    <tr>
      {#each columns as column (column.name)}
        <th>{column.name}</th>
      {/each}
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item (item.id)}
      <tr>
        {#each columns as column (column.key)}
          <td>{item[column.key]}</td>
        {/each}
        <td>
          {#each actions as action (action.name)}
            <button on:click={() => action.action(item)}>{action.name}</button>
          {/each}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
