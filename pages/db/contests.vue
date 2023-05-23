<template>
  <section>
    <b-table striped hover :items="contests"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    contests: [],
  }),
  async mounted() {
    this.contests = await this.$axios.$get('http://localhost:8000/api/contest')
  },
}
</script>

<style scoped></style>
