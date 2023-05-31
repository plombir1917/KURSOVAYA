<template>
  <section>
    <b-table striped hover :items="admins" :fields="fields">
      <template #cell(_)="data">
        <b-button
          size="sm"
          class="mr-2"
          variant="danger"
          @click.prevent="deleteAdmin(data.index)"
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
      <template #cell(admin_fullname)>
        <b-form-input
          v-model="newAdmin.admin_fullname"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(admin_phonenumber)>
        <b-form-input
          v-model="newAdmin.admin_phonenumber"
          placeholder="Поле ввода"
        ></b-form-input>
      </template>
      <template #cell(_)>
        <b-button
          size="sm"
          class="mr-2"
          variant="success"
          @click="createAdmin()"
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
    fields: ['admin_fullname', 'admin_phonenumber', '_'],
    admins: [],
    empty: [''],
    add: false,
    req: false,
    newAdmin: {
      admin_fullname: '',
      admin_phonenumber: '',
    },
  }),
  async mounted() {
    this.admins = await this.$axios.$get('/admin')
  },
  methods: {
    deleteAdmin(id) {
      this.admins.splice(id, 1)
    },
    createAdmin() {
      this.admins.push(this.newAdmin)
      this.newAdmin = ''
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
