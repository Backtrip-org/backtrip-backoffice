<template>
    <div>
        <v-alert :hidden="hidden" dense outlined type="error">
            {{ errorMessage }}
        </v-alert>
        <v-text-field v-model="email" type="email" label="Email"></v-text-field>
        <v-text-field v-model="password" type="password" label="Mot de passe"></v-text-field>
        <v-btn @click="login">Valider</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            email: "",
            password: "",
            hidden: true,
            errorMessage: ""
        }),
        methods: {
            login() {
                let requestBody = { email: this.email, password: this.password }
                this.$http.post('http://127.0.0.1:5000/auth/login',requestBody)
                    .then(response => this.loginSuccessful(response))
                .catch(error => this.loginFailed(error))
            },
            loginSuccessful(response) {
                console.log(response)
                if(response.status === 200) {
                    this.$store.commit("setAccessToken", response.data.Authorization)
                    this.$router.push('/')
                }
            },
            loginFailed(error) {
                if(!error.response) {
                    this.errorMessage = "Le serveur est indisponible."
                } else if(error.response.status === 400) {
                    this.errorMessage = "Email ou mot de passe inccorect."
                } else {
                    this.errorMessage = "Une erreur est survenue. Veuillez contacter le support."
                }
                this.hidden = false
            }
        }
    }
</script>

<style scoped>

</style>
