<template>
  <section>
    <b-table striped hover :items="editors"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    editors: [],
  }),
  async mounted() {
    this.editors = await this.$axios.$get('http://localhost:8000/api/editor')
  },
}
</script>

<style scoped></style>
