<script>
  export let title, date;
  import moment from "moment";
</script>

<div class="post-header">
  <h1>{title}</h1>
  {#if date != undefined}
    <time>{moment(date).format("YYYY-MM-DD hh:mm:ss")}</time>
  {/if}
</div>

<style lang="scss">
  .post-header {
    h1 {
      margin: 0;
    }

    time {
      font-size: smaller;
    }
  }
</style>
