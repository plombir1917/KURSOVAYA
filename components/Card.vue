<template>
  <div>
    <b-card-group>
      <b-card
        title="Фестиваль"
        img-src="../static/poster-fest.jpg"
        img-alt="Image"
        img-top
        img-height="400"
      >
        <b-card-text>
          18 марта состоится фестиваль официальной «Университетской» лиги КВН.
          Много команд, много юмора и хорошего настроения гарантируем!
          Встречаемся в 17:00 в ККЗ ЛГТУ (ул. Московская, 30).
        </b-card-text>
        <nuxt-link to="/tickets">
          <b-button variant="primary">Купить билет</b-button>
        </nuxt-link>
      </b-card>

      <b-card
        title="1/4 финала"
        img-src="../static/kvn-soon.jpg"
        img-alt="Image"
        img-top
        img-height="400"
      >
        <b-card-text> Скоро. Следите за новостями! </b-card-text>
      </b-card>

      <b-card
        title="Полуфинал"
        img-src="../static/kvn-soon.jpg"
        img-alt="Image"
        img-top
        img-height="400"
      >
        <b-card-text> Скоро. Следите за новостями! </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
