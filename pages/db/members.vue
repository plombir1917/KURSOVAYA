<template>
  <section>
    <b-table striped hover :items="members" :fields="fields"> </b-table>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    members: [],
  }),
  async mounted() {
    this.members = await this.$axios.$get('http://localhost:8000/api/member')
  },
}
</script>

<style scoped></style>
