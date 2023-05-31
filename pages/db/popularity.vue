<template>
  <section>
    <b-table striped hover :items="popularity" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deletePopularity(data.index)"
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
      <template #cell(popularity_audience)>
        <b-form-input
          v-model="newPopularity.popularity_audience"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(popularity_social_media_reach)>
        <b-form-input
          v-model="newPopularity.popularity_social_media_reach"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(popularity_discussion)>
        <b-form-input
          v-model="newPopularity.popularity_discussion"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(game_date)>
        <b-form-input
          v-model="newPopularity.game_date"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createPopularity()"
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
      'popularity_audience',
      'popularity_social_media_reach',
      'popularity_discussion',
      'game_date',
      '_',
    ],
    add: false,
    req: false,
    popularity: [],
    empty: [''],
    newPopularity: {
      popularity_audience: '',
      popularity_social_media_reach: '',
      popularity_discussion: '',
      game_date: '',
    },
  }),
  async mounted() {
    this.popularity = await this.$axios.$get('/popularity')
  },
  methods: {
    deletePopularity(id) {
      this.popularity.splice(id, 1)
    },
    createPopularity() {
      this.popularity.push(this.newPopularity)
      this.newPopularity = ''
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
