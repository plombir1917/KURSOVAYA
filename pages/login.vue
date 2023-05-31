<template>
  <section>
    <form action="">
      <img src="../static/kvn.jpg" class="img-thumbnail" alt="..." />
      <h1>Страница входа</h1>
      <div class="row mb-3">
        <div>
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Логин"
            v-model="user.login"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div>
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="Пароль"
            v-model="user.password"
          />
        </div>
      </div>
      <p>
        <nuxt-link to="/">На главную</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit" @click.prevent="onSubmit()">
        Войти
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: '',
        password: '',
      },
      res: '',
      auth: '',
      token: '',
    }
  },
  layout: 'empty',
  methods: {
    async onSubmit() {
      this.res = await this.$axios.$get(`/user/${this.user.login}`)
      this.auth = this.res[0]
      if (JSON.stringify(this.user) === JSON.stringify(this.auth)) {
        this.$router.push('/db/members')
        if (this.auth.login === 'editor') {
          this.token = 'editor'
          this.$store.dispatch('login', this.token)
        } else if (this.auth.login === 'admin') {
          this.token = 'admin'
          this.$store.dispatch('login', this.token)
        } else if (this.auth.login === 'director') {
          this.token = 'director'
          this.$store.dispatch('login', this.token)
        }
        console.log(this.token)
      } else {
        alert('Нет такого пользователя!')
      }
    },
  },
}
</script>

<style scoped>
img {
  border: none;
  display: block;
  margin: 0 auto;
}
form {
  margin: 0 auto;
  justify-content: center;
  width: 400px;
  text-align: center;
}
</style>
