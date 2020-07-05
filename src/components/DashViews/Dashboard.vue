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
          :data="countriesPieChart.data"
          :options="countriesPieChart.options"
          color="green"
          type="Bar"
        >
          <h3 class="title font-weight-light">Pays visités</h3>
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
          color="green"
          icon="mdi-book-open-variant"
          title="Voyages ouverts"
          value="230"
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
          color="orange"
          icon="mdi-book"
          title="Voyages fermés"
          value="80"
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
          color="info"
          icon="mdi-flag"
          title="Etapes créées"
          value="245"
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
          color="red"
          icon="mdi-account"
          title="Utilisateurs"
          value="34"
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
                        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
                countriesPieChart: {
                    data: {
                        labels: ['France', 'Etats-Unis', 'Italie', 'Espagne', 'Canada'],
                        series: [
                            [230, 750, 450, 300, 280]
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
                headers: [
                    {
                        sortable: false,
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        sortable: false,
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        sortable: false,
                        text: 'Salary',
                        value: 'salary',
                        align: 'right'
                    },
                    {
                        sortable: false,
                        text: 'Country',
                        value: 'country',
                        align: 'right'
                    },
                    {
                        sortable: false,
                        text: 'City',
                        value: 'city',
                        align: 'right'
                    }
                ],
                items: [
                    {
                        name: 'Dakota Rice',
                        country: 'Niger',
                        city: 'Oud-Tunrhout',
                        salary: '$35,738'
                    },
                    {
                        name: 'Minerva Hooper',
                        country: 'Curaçao',
                        city: 'Sinaai-Waas',
                        salary: '$23,738'
                    }, {
                        name: 'Sage Rodriguez',
                        country: 'Netherlands',
                        city: 'Overland Park',
                        salary: '$56,142'
                    }, {
                        name: 'Philip Chanley',
                        country: 'Korea, South',
                        city: 'Gloucester',
                        salary: '$38,735'
                    }, {
                        name: 'Doris Greene',
                        country: 'Malawi',
                        city: 'Feldkirchen in Kārnten',
                        salary: '$63,542'
                    }
                ],
                tabs: 0,
                list: {
                    0: false,
                    1: false,
                    2: false
                }
            }
        },
        methods: {
            complete (index) {
                this.list[index] = !this.list[index]
            }
        }
    }
</script>
