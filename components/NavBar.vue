<template>
  <b-navbar sticky class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <b-navbar-brand href="/">
        <img src="../static/kvn-icon.png" alt="KBH" />
      </b-navbar-brand>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/"
              >Новости</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/poster"
              >Афиша</nuxt-link
            >
          </li>
          <nuxt-link
            exact
            active-class="active"
            class="nav-link"
            aria-current="page"
            to="/tickets"
            >Билеты</nuxt-link
          >
        </ul>
        <nuxt-link class="btn btn-light" type="button" to="/login"
          >Войти</nuxt-link
        >
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  padding: 0;
}
</style>
