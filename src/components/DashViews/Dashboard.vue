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
          :data="dailyRegistrationChart.data"
          :options="dailyRegistrationChart.options"
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
          :data="dailyTripCreationsChart.data"
          :options="dailyTripCreationsChart.options"
          :responsive-options="dailyTripCreationsChart.responsiveOptions"
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
          :data="stepTypesDistributionChart.data"
          :options="stepTypesDistributionChart.options"
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
          :data="transportStepTypesDistributionChart.data"
          :options="transportStepTypesDistributionChart.options"
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
                dailyRegistrationChart: {
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
                stepTypesDistributionChart: {
                    data: {
                        labels: [],
                        series: [
                            []
                        ]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                transportStepTypesDistributionChart: {
                    data: {
                        labels: [],
                        series: [
                            []
                        ]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                dailyTripCreationsChart: {
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
            this.getLast10DaysDailyRegistration()
            this.getLast10DaysDailyTripCreation()
            this.getStepTypesDistribution()
            this.getTransportStepTypesDistribution()
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
            },
            getLast10DaysDailyRegistration () {
                this.$http.get('/stats/last10DaysDailyRegistration')
                    .then(response => {
                        this.dailyRegistrationChart.data.labels = response.data.labels
                        this.dailyRegistrationChart.data.series = [response.data.values]
                        this.dailyRegistrationChart.options.high = Math.max.apply(Math, response.data.values) + 1
                    })
                    .catch(error => console.log(error))
            },
            getLast10DaysDailyTripCreation () {
                this.$http.get('/stats/last10DaysDailyTripCreation')
                    .then(response => {
                        this.dailyTripCreationsChart.data.labels = response.data.labels
                        this.dailyTripCreationsChart.data.series = [response.data.values]
                        this.dailyTripCreationsChart.options.high = Math.max.apply(Math, response.data.values) + 1
                    })
                    .catch(error => console.log(error))
            },
            getStepTypesDistribution () {
                this.$http.get('/stats/stepTypesDistribution')
                    .then(response => {
                        this.stepTypesDistributionChart.data.labels = response.data.labels
                        this.stepTypesDistributionChart.data.series = [response.data.values]
                        this.stepTypesDistributionChart.options.high = Math.max.apply(Math, response.data.values) + 5
                    })
                    .catch(error => console.log(error))
            },
            getTransportStepTypesDistribution () {
                this.$http.get('/stats/transportStepTypesDistribution')
                    .then(response => {
                        this.transportStepTypesDistributionChart.data.labels = response.data.labels
                        this.transportStepTypesDistributionChart.data.series = [response.data.values]
                        this.transportStepTypesDistributionChart.options.high = Math.max.apply(Math, response.data.values) + 5
                    })
                    .catch(error => console.log(error))
            }
        }
    }
</script>
