<script>
import curriculoService from '../Services/curriculos.service'

export default {
  data () {
    return {
      page: 1,
      direction: 'N',
      sexos: [],
      estadosCivis: [],
      estados: []
    }
  },

  computed: {
    getEffect () {
      return this.direction == 'N' ? 'animated fadeOutLeftBig' : 'animated fadeOutRightBig'
    },

    getInEffect () {
      return this.direction == 'N' ? 'animated fadeInRight' : 'animated fadeInLeftBig'
    }
  },

  methods: {
    setPage (page, direction) {
      this.page = page
      this.direction = direction
    }
  },

  mounted () {
    curriculoService.getSexoEnum()
      .then((sexoEnum) => {
        this.sexos = sexoEnum
      })

    curriculoService.getEstadoCivilEnum()
      .then((estadoCivilEnum) => {
        this.estadosCivis = estadoCivilEnum
      })

    curriculoService.getEstados()
      .then((response) => {
        this.estados = response.data
      })
  }
}
</script>

<style src="./form.css"></style>
<template src="./form.html"></template>
