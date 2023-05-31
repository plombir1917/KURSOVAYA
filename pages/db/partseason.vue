<template>
  <section>
    <b-table striped hover :items="partseason" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deletePartseason(data.index)"
        >
          Удалить
        </b-button>
      </template>
    </b-table>
    <div class="mt-3 buttons">
      <b-button-group>
        <b-button variant="primary" @click.prevent="add = true"
          >Добавить</b-button
        >
        <b-button variant="outline-primary" @click.prevent="req = true"
          >Запрос</b-button
        >
      </b-button-group>
    </div>
    <b-table striped hover :items="empty" :fields="fields" v-if="add">
      <template #cell(season_year)>
        <b-form-input
          v-model="newPartseason.season_year"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_name)>
        <b-form-input
          v-model="newPartseason.team_name"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(position_in_the_season)>
        <b-form-input
          v-model="newPartseason.position_in_the_season"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createPartseason()"
        >
          Отправить
        </b-button>
      </template>
    </b-table>
    <div v-if="req">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Сформулируйте запрос на языке SQL..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'database',
  data: () => ({
    fields: ['season_year', 'team_name', 'position_in_the_season', '_'],
    add: false,
    req: false,
    empty: [''],
    partseason: [],
    newPartseason: {
      season_year: '',
      team_name: '',
      position_in_the_season: '',
    },
  }),
  async mounted() {
    this.partseason = await this.$axios.$get('/partseason')
  },
  methods: {
    deletePartseason(id) {
      this.partseason.splice(id, 1)
    },
    createPartseason() {
      this.partseason.push(this.newPartseason)
      this.newPartseason = ''
    },
  },
}
</script>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
