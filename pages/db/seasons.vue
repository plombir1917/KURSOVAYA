<template>
  <section>
    <b-table striped hover :items="seasons"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    seasons: [],
  }),
  async mounted() {
    this.seasons = await this.$axios.$get('http://localhost:8000/api/season')
  },
}
</script>

<style scoped></style>
