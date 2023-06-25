<script>
  import Head from "./lib/Head.svelte";
  export let title;
</script>

<Head {title}/>
<slot />
