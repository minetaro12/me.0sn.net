<script>
  import { title as configTitle } from "../config";
  export let title;

  let outTitle;
  if (title == undefined) {
    outTitle = configTitle;
  } else {
    outTitle = title + " - " + configTitle;
  }
</script>

<svelte:head>
  <title>{outTitle}</title>
</svelte:head>
