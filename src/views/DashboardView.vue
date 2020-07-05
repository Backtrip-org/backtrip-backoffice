<template>
  <v-app
    id="dashboard-view"
    light>
    <core-drawer />
    <core-toolbar />

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>

    <core-footer/>

  </v-app>
</template>

<script>
export default {
  name: 'DashboardView',
  metaInfo () {
    return {
      title: 'Panneau d\'administration'
    }
  }
}
</script>

<style>

</style>
