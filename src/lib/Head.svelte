<script>
  import config from "../config";
  export let title;

  let outTitle;
  if (title == undefined) {
    outTitle = config.title;
  } else {
    outTitle = title + " - " + config.title;
  }
</script>

<svelte:head>
  <title>{outTitle}</title>
  <meta name="description" content={config.description} />
</svelte:head>
