<template>
  <section>
    <b-table striped hover :items="teams"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    teams: [],
  }),
  async mounted() {
    this.teams = await this.$axios.$get('http://localhost:8000/api/team')
  },
}
</script>

<style scoped></style>
