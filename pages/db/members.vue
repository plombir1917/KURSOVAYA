<template>
  <section>
    <b-table striped hover :items="members" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteMember(data.index)"
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
      <template #cell(member_fullname)>
        <b-form-input
          placeholder="Поле ввода"
          v-model="newMember.member_fullname"
        ></b-form-input>
      </template>
      <template #cell(team_name)>
        <b-form-input
          v-model="newMember.team_name"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(member_passport)>
        <b-form-input
          v-model="newMember.member_passport"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(member_phone)>
        <b-form-input
          v-model="newMember.member_phone"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createMember()"
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
      'member_fullname',
      'team_name',
      'member_passport',
      'member_phone',
      '_',
    ],
    add: false,
    req: false,
    members: [],
    empty: [''],
    newMember: {
      member_fullname: '',
      team_name: '',
      member_passport: '',
      member_phone: '',
    },
  }),
  async mounted() {
    this.members = await this.$axios.$get('/member')
  },
  methods: {
    deleteMember(id) {
      this.members.splice(id, 1)
    },
    createMember() {
      this.members.push(this.newMember)
      this.newMember = ''
    },
    /* async createMember() {
    const response = await this.$axios.$post(
      '/member/',
      JSON.stringify(this.newMember)
    )
  }, */
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
