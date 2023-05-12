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
          />
        </div>
      </div>
      <p>
        <nuxt-link to="/">На главную</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit">Войти</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
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
