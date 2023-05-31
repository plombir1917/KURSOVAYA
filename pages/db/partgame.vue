<template>
  <section>
    <b-table striped hover :items="partgame" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deletePartgame(data.index)"
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
      <template #cell(game_date)>
        <b-form-input
          v-model="newPartgame.game_date"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_name)>
        <b-form-input
          v-model="newPartgame.team_name"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(position_in_the_game)>
        <b-form-input
          v-model="newPartgame.position_in_the_game"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(stage_game)>
        <b-form-input
          v-model="newPartgame.stage_game"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createPartgame()"
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
    fields: [
      'game_date',
      'team_name',
      'position_in_the_game',
      'stage_game',
      '_',
    ],
    add: false,
    req: false,
    empty: [''],
    partgame: [],
    newPartgame: {
      game_date: '',
      team_name: '',
      position_in_the_game: '',
      stage_game: '',
    },
  }),
  async mounted() {
    this.partgame = await this.$axios.$get('/partgame')
  },
  methods: {
    deletePartgame(id) {
      this.partgame.splice(id, 1)
    },
    createPartgame() {
      this.partgame.push(this.newPartgame)
      this.newPartgame = ''
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
