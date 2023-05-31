<template>
  <section>
    <b-table striped hover :items="teams" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteTeam(data.index)"
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
      <template #cell(team_name)>
        <b-form-input
          v-model="newTeam.team_name"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(editor_fullname)>
        <b-form-input
          v-model="newTeam.editor_fullname"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(admin_fullname)>
        <b-form-input
          v-model="newTeam.admin_fullname"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_achievments)>
        <b-form-input
          v-model="newTeam.team_achievments"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_rate)>
        <b-form-input
          v-model="newTeam.team_rate"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_years_of_activity)>
        <b-form-input
          v-model="newTeam.team_years_of_activity"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(team_motherland)>
        <b-form-input
          v-model="newTeam.team_motherland"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createTeam()"
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
      'team_name',
      'editor_fullname',
      'admin_fullname',
      'team_achievments',
      'team_rate',
      'team_years_of_activity',
      'team_motherland',
      '_',
    ],
    add: false,
    req: false,
    teams: [],
    empty: [''],
    newTeam: {
      team_name: '',
      editor_fullname: '',
      admin_fullname: '',
      team_achievments: '',
      team_rate: '',
      team_years_of_activity: '',
      team_motherland: '',
    },
  }),
  async mounted() {
    this.teams = await this.$axios.$get('/team')
  },
  methods: {
    createTeam() {
      this.teams.push(this.newTeam)
      this.newTeam = ''
    },
    deleteTeam(id) {
      this.teams.splice(id, 1)
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
