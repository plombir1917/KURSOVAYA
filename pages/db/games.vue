<template>
  <section>
    <b-table striped hover :items="games"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    games: [],
  }),
  async mounted() {
    this.games = await this.$axios.$get('http://localhost:8000/api/game')
  },
}
</script>

<style scoped></style>
