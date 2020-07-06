<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<style lang="scss">
    @import "@/styles/index.scss";

    /* Remove in 1.2 */
    .v-datatable thead th.column.sortable i {
        vertical-align: unset;
    }
</style>
<script>
    export default {
        created: function () {
            this.$http.interceptors.response.use((response) => {
                return response
            }, (error) => {
                return Promise.reject(error)
            })
        }
    }
</script>
