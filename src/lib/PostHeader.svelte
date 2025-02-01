<script>
  export let title, date, tags;
  import moment from "moment";
</script>

<div class="post-header">
  <h1>{title}</h1>
  {#if date != undefined}
    <time>{moment(date).format("YYYY-MM-DD hh:mm:ss")}</time>
    {#each tags as tag}
      <span class="tags">#{tag}</span>
    {/each}
  {/if}
</div>

<style lang="scss">
  .post-header {
    h1 {
      margin: 0;
    }

    time,.tags {
      font-size: smaller;
      margin-right: 0.25rem;
    }
  }
</style>
