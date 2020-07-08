<template>
  <v-content>
    <v-container
      fill-height
      fluid>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <v-card
            class="my-5 elevation-12">
            <v-toolbar
              color="general">
              <v-toolbar-title>Administration Backtrip</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form >
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="[() => !!email || 'Ce champ est obligatoire']"
                  prepend-icon="mdi-account"
                  label="Email"
                  placeholder="adresse@mail.com"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'Ce champ est obligatoire']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Mot de passe"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                align-center
                justify-center
                color="general"
                @click="login">Connexion
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :top="true"
            >
              {{ errorMessages }}
              <v-btn
                light
                flat
                @click="snackbar = false"
              >
                Fermer
              </v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </v-content>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: '',
      errorMessages: 'Informations incorrectes',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email: email, password: password })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => {
          console.log(err)
          this.snackbar = true
        }
        )
    }
  },
  metaInfo () {
    return {
      title: 'Connexion'
    }
  }
}
</script>
