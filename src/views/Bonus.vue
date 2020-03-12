<template>
  <div class="bonus container-fluid">
    <div class="map"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const loadGoogleMapsApi = require('load-google-maps-api')
export default {
  name: 'Bonus',
  computed: {
    ...mapGetters({
      peoples: 'peoplesGetter'
    })
  },
  mounted () {
    if (!this.peoples) this.getPeoples().then(() => this.buildMap())
    else this.buildMap()
  },
  methods: {
    ...mapActions(['getPeoples']),
    buildMap () {
      loadGoogleMapsApi({
        key: 'AIzaSyCZjZ82JtDV3K4WATNnrHRL1sKnP1WIWn8'
      }).then((googleMaps) => {
        const Latlng = new googleMaps.LatLng(-25.363882, 131.044922)
        // eslint-disable-next-line no-new
        const map = new googleMaps.Map(document.querySelector('.map'), {
          center: Latlng,
          zoom: 2
        })
        this.peoples.map((item) => {
          const { latitude, longitude } = item.location
          const Latlng = new googleMaps.LatLng(latitude, longitude)
          const marker = new googleMaps.Marker({
            position: Latlng,
            title: item.name
          })
          marker.setMap(map)
        })
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style>
  .map {
    width: 100%;
    height: 500px;
  }
</style>
