<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <div>
          <material-card
            color="grey"
            title="Liste des utilisateurs"
          >
            <v-spacer/>
            <v-text-field
              v-model="search"
              class="my-4"
              append-icon="search"
              label="Rechercher"
              single-line
              hide-details/>

            <v-data-table
              :headers="headers"
              :items="UserList"
              :rows-per-page-items = "[25]"
              :search="search"
              disable-pagination
              class="elevation-1"
            >
              <!-- change table header background and text color(or other properties) -->
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="subheading font-weight-light text-general text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td class="justify-center ">
                  <input
                    id="checkbox_admin"
                    v-model="props.item.admin"
                    type="checkbox"
                    @change="setUserAsAdmin(props.item)">
                </td>
                <td class="justify-center ">
                  <input
                    id="checkbox_ban"
                    v-model="props.item.banned"
                    type="checkbox"
                    @change="banUser(props.item)">
                </td>
                <td>
                  <div>{{ props.item.email }}</div>
                </td>
                <td>
                  <div>{{ props.item.lastname }}</div>
                </td>
                <td>
                  <div>{{ props.item.firstname }}</div>
                </td>
              </template>
            </v-data-table>
            <v-snackbar
              v-model="snack"
              :timeout="3000"
              :color="snackColor">
              {{ snackText }}
              <v-btn
                flat
                @click="snack = false">Fermer</v-btn>
            </v-snackbar>
          </material-card>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    snack: false,
    snackColor: '',
    snackText: '',
    UserList: [],
    search: '',
    headers: [
      { text: 'Id', align: 'left', value: 'id' },
      { text: 'Admin', value: 'actions', sortable: false },
      { text: 'Banni', value: 'actions', sortable: false },
      { text: 'Email', value: 'email' },
      { text: 'Nom', value: 'lastname' },
      { text: 'Prénom', value: 'firstname' }

    ]
  }),

  created () {
    this.getUsers()
  },

  methods: {
    getUsers () {
      this.$http.get('/user/')
        .then(response => {
          this.UserList = response.data.data
        })
        .catch(error => console.log(error))
    },
    banUser (item) {
      this.$http.patch(`/user/${item.id}/${ item.banned ? 'ban' : 'unban' }`)
              .then(response => {
                this.saveInline()
              })
              .catch(() => this.cancelInline())
    },
    setUserAsAdmin (item) {
      this.$http.patch(`/user/${item.id}/${ item.admin ? 'makeAdmin' : 'revokeAdmin' }`)
              .then(response => {
                this.saveInline()
              })
              .catch(() => this.cancelInline())
    },
    // toasts/snackbar messages for actions
    saveInline () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Modification effectée avec succès'
    },
    cancelInline () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Une erreur est apparue'
    }
  }
}
</script>

<style>
table.v-table thead tr {
  color: red !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}
</style>
