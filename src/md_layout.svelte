<script>
  import Head from "./lib/Head.svelte";
  import PostHeader from "./lib/PostHeader.svelte";
  export let title, date, hideTitle, tags;
</script>

<Head {title} />

{#if !hideTitle}
  <PostHeader {title} {date} {tags} />
{/if}
<article class="post-content">
  <slot />
</article>
