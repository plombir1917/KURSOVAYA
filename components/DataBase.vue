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
                v-if="this.token === 'admin' || this.token === 'director'"
                >Участники</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                class="nav-link"
                aria-current="page"
                to="/db/teams"
                v-if="this.token === 'admin' || this.token === 'director'"
                @click.prevent="onSumbit()"
                >Команды</nuxt-link
              >
            </li>
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/contests"
              v-if="this.token === 'editor' || this.token === 'director'"
              >Конкурсы</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/games"
              v-if="this.token === 'editor' || this.token === 'director'"
              >Игра</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/seasons"
              v-if="this.token === 'editor' || this.token === 'director'"
              >Сезон</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/popularity"
              v-if="this.token === 'admin' || this.token === 'director'"
              >Популярность</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/admins"
              v-if="this.token === 'director'"
              >Администраторы</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/editors"
              v-if="this.token === 'director'"
              >Редакторы</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/partseason"
              v-if="this.token === 'director' || this.token === 'editor'"
              >Участие в сезоне</nuxt-link
            >
            <nuxt-link
              exact
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/db/partgame"
              v-if="this.token === 'director' || this.token === 'editor'"
              >Участие в игре</nuxt-link
            >
          </ul>
          <nuxt-link
            class="btn btn-light"
            type="button"
            to="/login"
            @click.prevent="logout()"
            >Выйти</nuxt-link
          >
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    onSubmit() {},
    logout() {
      this.$store.dispatch('logout')
    },
  },
  computed: {
    ...mapState(['token']),
  },
}
</script>

<style lang="scss" scoped></style>
