<script>
  import { title } from "../../config";
  import { posts } from "../../posts";
  import sort from "../../lib/sort";
  import moment from "moment";

  let isAsc = false;
</script>

<svelte:head>
  <title>Posts - {title}</title>
</svelte:head>

<div class="list-header">
  <h1>Posts</h1>
  <span>
    <input type="checkbox" bind:value={isAsc} id="isAsc" bind:checked={isAsc} />
    <label for="isAsc">昇順</label>
  </span>
</div>

<ul class="post-list">
  {#each sort(posts, isAsc) as post}
    <li>
      <a href={post.path}>{post.title}</a>
      <div>
        <span><time>{moment(post.date).format("YYYY-MM-DD")}</time></span>
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "../../scss/env.scss";
  .list-header {
    align-items: center;
    display: flex;
    justify-content: space-between;

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

      > div {
        font-size: small;
      }
    }
  }
</style>
