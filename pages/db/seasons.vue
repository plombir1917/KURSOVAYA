<template>
  <section>
    <b-table striped hover :items="seasons" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteSeason(data.index)"
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
      <template #cell(season_result)>
        <b-form-input
          v-model="newSeason.season_result"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(season_year)>
        <b-form-input
          v-model="newSeason.season_year"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(season_number_of_games)>
        <b-form-input
          v-model="newSeason.season_number_of_games"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createSeason()"
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
    fields: ['season_result', 'season_year', 'season_number_of_games', '_'],
    seasons: [],
    empty: [''],
    newSeason: {
      season_result: '',
      season_year: '',
      season_number_of_games: '',
    },
    add: false,
    req: false,
  }),
  async mounted() {
    this.seasons = await this.$axios.$get('/season')
  },
  methods: {
    deleteSeason(id) {
      this.seasons.splice(id, 1)
    },
    createSeason() {
      this.seasons.push(this.newSeason)
      this.newSeason = ''
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
