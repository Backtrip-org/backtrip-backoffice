<template>
    <v-app>
        <div id="img-div" class="mx-auto ma-6">
            <v-img src="../assets/backtrip-logo.png"></v-img>
        </div>
        <v-card width="600" class="mx-auto ma-6">
            <v-card-text>
                <v-alert :hidden="hidden" dense outlined type="error">
                    {{ errorMessage }}
                </v-alert>
                <v-form>
                    <v-text-field :rules="email_rules" outlined v-model="email" type="email" label="Email"
                                  prepend-inner-icon="mdi-account"/>
                    <v-text-field :rules="password_rules" v-model="password" label="Mot de passe"
                                  prepend-inner-icon="mdi-lock" outlined
                                  :type="showPassword ? 'text' : 'password'"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  @click:append="showPassword = !showPassword"/>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
                <v-btn outlined width="200" @click="login" color="primary">Valider</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            showPassword: false,
            email: "",
            password: "",
            hidden: true,
            errorMessage: "",
            email_rules: [
                value => !!value || "Veuillez indiquer votre email."
            ],
            password_rules: [
                value => !!value || "Veuillez indiquer votre mot de passe."
            ],
            email_regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        }),
        methods: {
            login() {
                if (!this.email || !this.password) {
                    this.errorMessage = "Veuillez saisir tous les champs avant de valider."
                    this.hidden = false
                } else if (!this.email.match(this.email_regex)) {
                    this.errorMessage = "Votre email n'est pas valide."
                    this.hidden = false
                } else {
                    let requestBody = {email: this.email, password: this.password}
                    this.$http.post('http://127.0.0.1:5000/auth/adminLogin', requestBody)
                        .then(response => this.loginSuccessful(response))
                        .catch(error => this.loginFailed(error))
                }
            },
            loginSuccessful(response) {
                console.log(response)
                if (response.status === 200) {
                    this.$store.commit("setAccessToken", response.data.Authorization)
                    this.$router.push('/')
                }
            },
            loginFailed(error) {
                if (!error.response) {
                    this.errorMessage = "Le serveur est indisponible."
                } else if (error.response.status === 400) {
                    this.errorMessage = "Email ou mot de passe inccorect."
                } else {
                    this.errorMessage = "Une erreur est survenue. Veuillez contacter le support."
                }
                this.hidden = false
            }
        },
        created() {
            window.addEventListener("keypress", function (e) {
                if(e.key === "Enter") {
                    this.login()
                }
            }.bind(this))
        }
    }
</script>

<style scoped>
    #img-div {
        width: 350px;
    }
</style>
