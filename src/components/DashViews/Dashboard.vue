<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="warning"
          type="Line"
        >
          <h4 class="title font-weight-light">Inscriptions journalières</h4>
          <p class="category d-inline-flex font-weight-light">10 derniers jours</p>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">Créations de voyage journalières</h4>
          <p class="category d-inline-flex font-weight-light">10 derniers jours</p>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="topCountriesChart.data"
          :options="topCountriesChart.options"
          color="green"
          type="Bar"
        >
          <h3 class="title font-weight-light">Top 5 des pays les plus visités</h3>
          <p class="category d-inline-flex font-weight-light">Depuis le lancement</p>
        </material-chart-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="globalStats.open_trips"
          color="green"
          icon="mdi-book-open-variant"
          title="Voyages ouverts"
          sub-icon="mdi-clock"
          sub-text="Actuellement"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="globalStats.closed_trips"
          color="orange"
          icon="mdi-book"
          title="Voyages fermés"
          sub-icon="mdi-clock"
          sub-text="Actuellement"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="globalStats.created_steps"
          color="info"
          icon="mdi-flag"
          title="Etapes créées"
          sub-icon="mdi-update"
          sub-text="Depuis le lancement"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="globalStats.users_number"
          color="red"
          icon="mdi-account"
          title="Utilisateurs"
          sub-icon="mdi-clock"
          sub-text="Actuellement"
        />
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="indigo"
          type="Bar"
        >
          <h3 class="title font-weight-light">Répartition des étapes par type</h3>
          <p class="category d-inline-flex font-weight-light">Depuis le lancement</p>
        </material-chart-card>
      </v-flex>

      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="indigo"
          type="Bar"
        >
          <h3 class="title font-weight-light">Répartition des étapes par type de transport</h3>
          <p class="category d-inline-flex font-weight-light">Depuis le lancement</p>
        </material-chart-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Dashboard',
    data () {
      return {
        globalStats: {},
        topCountriesChart: {
          data: {
            labels: [],
            series: [
              []
            ]
          },
          options: {
            axisX: {
              showGrid: false
            },
            low: 0,
            high: 30,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0
            }
          }
        },
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                        series: [
                            [12, 17, 7, 17, 23, 18, 38]
                        ]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 50,
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                dataCompletedTasksChart: {
                    data: {
                        labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                        series: [
                            [230, 750, 450, 300, 280, 240, 200, 190]
                        ]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                emailsSubscriptionChart: {
                    data: {
                        labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
                        series: [
                            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

                        ]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        ['screen and (max-width: 768x)', {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (value) {
                                    return value[0]
                                }
                            }
                        }]
                    ]
                },
                tabs: 0,
                list: {
                    0: false,
                    1: false,
                    2: false
                }
            }
        },
        created () {
            this.getOpenTrips()
            this.getTopVisitedCountries()
        },
        methods: {
            getOpenTrips () {
                this.$http.get('/stats/global')
                    .then(response => {
                        this.globalStats = response.data
                    })
                    .catch(error => console.log(error))
            },
            getTopVisitedCountries () {
              this.$http.get('/stats/topVisitedCountries')
                      .then(response => {
                        this.topCountriesChart.data.labels = response.data.labels
                        this.topCountriesChart.data.series = [response.data.values]
                        this.topCountriesChart.options.high = response.data.values[0] + (response.data.values[0] * 0.2)
                      })
                      .catch(error => console.log(error))
            }
        }
    }
</script>
