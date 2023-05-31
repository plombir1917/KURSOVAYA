<template>
  <section>
    <b-table striped hover :items="games" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteGame(data.index)"
        >
          Удалить
        </b-button>
      </template></b-table
    >
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
      <template #cell(game_jury)>
        <b-form-input
          v-model="newGame.game_jury"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(game_date)>
        <b-form-input
          v-model="newGame.game_date"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(game_stage)>
        <b-form-input
          v-model="newGame.game_stage"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(season_year)>
        <b-form-input
          v-model="newGame.season_year"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createGame()"
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
    fields: ['game_jury', 'game_date', 'game_stage', 'season_year', '_'],
    games: [],
    empty: [''],
    newGame: {
      game_jury: '',
      game_date: '',
      game_stage: '',
      season_year: '',
    },
    add: false,
    req: false,
  }),
  async mounted() {
    this.games = await this.$axios.$get('/game')
  },
  methods: {
    deleteGame(id) {
      this.games.splice(id, 1)
    },
    createGame() {
      this.games.push(this.newGame)
      this.newGame = ''
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
