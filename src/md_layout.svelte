<script>
  import Head from "./lib/Head.svelte";
  import PostHeader from "./lib/PostHeader.svelte";
  export let title, date, hideTitle;
</script>

<Head {title} />

{#if !hideTitle}
  <PostHeader {title} {date} />
{/if}
<article class="post-content">
  <slot />
</article>
