<template>
    <div>
        {{message_to_say}}
    </div>
</template>

<script>
    export default {
        name: "Hi",
        data() {
            return {
                message_to_say: ''
            }
        },
        created() {
            this.axios.get(`http://localhost:5000/`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.message_to_say = response.data;
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
</script>

<style scoped>

</style>
