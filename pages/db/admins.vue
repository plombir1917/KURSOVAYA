<template>
  <section>
    <b-table striped hover :items="admins"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    admins: [],
  }),
  async mounted() {
    this.admins = await this.$axios.$get('http://localhost:8000/api/admin')
  },
}
</script>

<style scoped></style>
