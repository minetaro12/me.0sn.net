<script>
  import Header from "../lib/Header.svelte";
  import "../app.scss";
  import Footer from "../lib/Footer.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  @import "../scss/env.scss";
  .container {
    cursor: default;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
    min-height: 98svh;
  }

  main {
    flex: 1;
  }
</style>
