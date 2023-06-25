<script>
  import { page } from "$app/stores";
  import { links, extLinks } from "../config";
</script>

<header>
  <nav>
    <ul>
      {#each links as link}
        <li>
          <a href={link.path} class:now={$page.url.pathname == link.path}
            >{link.name}</a
          >
        </li>
      {/each}{#each extLinks as extLink}
        <li>
          <a href={extLink.path} target="_blank" rel="noopener noreferrer"
            >{extLink.name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @import "../scss/env.scss";

  .now {
    color: $ac;
    text-decoration: underline;
  }
  
  nav {
    display: flex;
    font-weight: 800;
    margin: 1rem 0;

    ul {
      display: flex;
      list-style: none;
      margin: auto;
      padding: 0;

      li {
        margin: 0 1rem;

        a {
          color: $fg;
          &:hover {
            color: $ac;
          }
        }
      }
    }
  }
</style>
