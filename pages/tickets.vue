<template>
  <div>
    <b-card :title="cardTitle" body-class="text-center" header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item active>Фестиваль</b-nav-item>
          <b-nav-item disabled>1/4 финала</b-nav-item>
          <b-nav-item disabled>Полуфинал</b-nav-item>
          <b-nav-item disabled>Финал</b-nav-item>
        </b-nav>
      </template>

      <b-card-text>
        Дорогие друзья, уже на следующей неделе ККЗ ЛГТУ вновь распахнет свои
        двери для XVI сезона Официальной Университетской Лиги Международного
        Союза КВН!
      </b-card-text>
      <div>
        <img height="500" src="../static/kvn-ad.jpg" />
      </div>
      <b-button class="btt" variant="primary">Купить билет</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardTitle: 'Фестиваль',
    }
  },
}
</script>

<style scoped>
.btt {
  margin-top: 10px;
}
</style>
