<template>
  <section>
    <b-table striped hover :items="contests" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteContest(data.index)"
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
      <template #cell(contest_duration)>
        <b-form-input
          v-model="newContest.contest_duration"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(contest_name)>
        <b-form-input
          v-model="newContest.contest_name"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(contest_description)>
        <b-form-input
          v-model="newContest.contest_description"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createContest()"
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
    fields: ['contest_duration', 'contest_name', 'contest_description', '_'],
    contests: [],
    empty: [''],
    newContest: {
      contest_duration: '',
      contest_name: '',
      contest_description: '',
    },
    add: false,
    req: false,
  }),
  async mounted() {
    this.contests = await this.$axios.$get('/contest')
  },
  methods: {
    deleteContest(id) {
      this.contests.splice(id, 1)
    },
    createContest() {
      this.contests.push(this.newContest)
      this.newContest = ''
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
