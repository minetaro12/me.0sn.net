<script>
  export let data;
  import { title } from "../../config";
  import sort from "../../lib/sort";
  import moment from "moment";
  import getTags from "../../lib/getTags";
  import searchPost from "../../lib/searchPost";

  let isAsc = false;
  let searchTag;
  let resPosts = [];

  $: {
    if (searchTag === undefined) {
      resPosts = sort(data.postList, isAsc);
    } else {
      resPosts = sort(searchPost(data.postList, searchTag), isAsc);
    }
  }
</script>

<svelte:head>
  <title>Posts - {title}</title>
</svelte:head>

<div class="list-header">
  <h1>Posts</h1>
  <span>
    <select bind:value={searchTag}>
      <option value={undefined}>not selected</option>
      {#each getTags(data.postList) as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </select>
  </span>
  <span>
    <input type="checkbox" bind:value={isAsc} id="isAsc" bind:checked={isAsc} />
    <label for="isAsc">昇順</label>
  </span>
</div>

<ul class="post-list">
  {#each resPosts as post}
    <li>
      <a href={post.path}>{post.title}</a>
      <div class="post-meta">
        <span><time>{moment(post.date).format("YYYY-MM-DD")}</time></span>
        <span class="tag-list">
          {#each post.tags as tag}
            <span class="tag">#{tag}</span>
          {/each}
        </span>
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "../../scss/env.scss";
  .list-header {
    align-items: center;
    display: flex;

    h1 {
      flex: 1;
    }

    span {
      user-select: none;
    }
  }

  ul.post-list {
    padding: 0;
    list-style: none;

    li {
      border-bottom: 1px dashed $br;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding-bottom: 5px;

      &:hover {
        border-bottom: 1px solid;
      }

      a {
        color: $fg;
        font-weight: 500;
        padding-bottom: 10px;
        text-decoration: none;

        &:hover {
          color: $ac;
          text-decoration: underline;
        }
      }

      > div.post-meta {
        font-size: small;

        .tag {
          margin-right: 5px;
        }
      }
    }
  }
</style>
