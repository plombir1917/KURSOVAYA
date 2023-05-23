<template>
  <section>
    <b-table striped hover :items="popularity"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    popularity: [],
  }),
  async mounted() {
    this.popularity = await this.$axios.$get(
      'http://localhost:8000/api/popularity'
    )
  },
}
</script>

<style scoped></style>
