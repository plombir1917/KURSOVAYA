<template>
  <div>
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
                to="/db/members"
                >Участники</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                class="nav-link"
                aria-current="page"
                to="/db/teams"
                >Команды</nuxt-link
              >
            </li>
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/contests"
              >Конкурсы</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/games"
              >Игра</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/seasons"
              >Сезон</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/popularity"
              >Популярность</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/admins"
              >Администраторы</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/editors"
              >Редакторы</nuxt-link
            >
          </ul>
          <nuxt-link class="btn btn-light" type="button" to="/login"
            >Выйти</nuxt-link
          >
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
