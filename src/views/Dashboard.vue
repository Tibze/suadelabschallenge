<template>
  <div class="dashboard container-fluid">
    <div class="row" v-if="pieData && barData">
      <div class="col-6">
        <h4>By Color Eye</h4>
        <p>You can filter the page by color eye, click on pie area</p>
        <pie :chart-data="pieData" :height="heightChart" :options="pieOptions"/>
      </div>
      <div class="col-6" v-if="barData">
        <h4>People / Age <span v-if="eyeColorSelected">(only eye color {{eyeColorSelected}})</span></h4>
        <bar :chart-data="barData" :height="heightChart" :options="barOptions"/>
        <button v-if="eyeColorSelected" class="btn btn-primary" @click="resetClickHandler">Reset Filter ColorEye</button>
      </div>
    </div>
    <div class="row mt-5" v-if="peoples">
      <div class="col-12">
        <h4>People Datatable</h4>
        <edit-people :peoples="filterPeoples || peoples" @update-age="updateAgeHandler"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatPieChart, formatBarChart } from '@/util/chart.js'
import Pie from '@/components/chart/Pie.vue'
import Bar from '@/components/chart/Bar.vue'
import EditPeople from '@/components/EditPeople.vue'

export default {
  name: 'Home',
  components: {
    Pie,
    Bar,
    EditPeople
  },
  computed: {
    ...mapGetters({
      peoples: 'peoplesGetter',
      filterPeoples: 'filterPeoplesGetter'
    })
  },
  data () {
    return {
      heightChart: 200,
      pieData: null,
      barData: null,
      pieOptions: {
        onClick: this.pieClickHandler
      },
      barOptions: {
        legend: {
          display: false
        }
      },
      eyeColorSelected: null
    }
  },
  mounted () {
    this.getPeoples().then(() => {
      this.pieData = formatPieChart(this.peoples)
      this.barData = formatBarChart(this.peoples)
    })
  },
  methods: {
    ...mapActions(['getPeoples', 'setFilterPeoples', 'resetFilterPeoples', 'updateAgeOfPeople']),
    pieClickHandler (point, event) {
      const item = event[0]
      if (!item) return
      this.eyeColorSelected = this.pieData.labels[item._index]
      this.barData = formatBarChart(this.peoples, this.eyeColorSelected)
      this.setFilterPeoples(this.eyeColorSelected)
    },
    resetClickHandler () {
      this.eyeColorSelected = null
      this.barData = formatBarChart(this.peoples)
      this.resetFilterPeoples()
    },
    updateAgeHandler (params) {
      this.updateAgeOfPeople(params)
      this.barData = formatBarChart(this.peoples, this.eyeColorSelected)
    }
  }
}
</script>

<style>
  .home {
    height: 400px;
  }
</style>
