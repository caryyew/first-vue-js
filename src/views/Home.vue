<template>
<div>
    <div>
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand link-underline-danger" href="/">Bas Sahypa</a>
      <a class="navbar-brand link-underline-danger" href="/com">Computers</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
    </div>
    <h1 class="text-center pt-3"><i>Islendik Gornusdaki Kompyuterler</i></h1>
    <Card />
    <Footer />
</div>

</template>

<script>
import Card from "@/views/Card.vue"
import Footer from "@/views/Footer.vue"
export default {
    components : {
        Card,
        Footer
    }
}
</script>







