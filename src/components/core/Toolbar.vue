<template>
  <v-toolbar
    id="core-toolbar"
    app
    light
    style="background: #8bbabb"
    flat
    prominent>
    <div class="v-toolbar-title">
      <v-toolbar-title class="font-weight-light">
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          icon
          @click.stop="onClickBtn">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>

    <v-spacer/>
    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2>
        <v-menu
          bottom
          left
          content-class
          offset-y
          transition="slide-y-transition"/>

        <v-icon
          class="toolbar-items"
          color
          @click="logout">mdi-power</v-icon>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    title: 'Panneau d\'administration',
    responsive: false,
    responsiveInput: false
  }),

  computed: {
    ...mapGetters(['authorized'])
  },

  watch: {
    $route (val) {
      this.title = val.meta.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    },
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
#core-toolbar a {
    text-decoration: none;
}
</style>
