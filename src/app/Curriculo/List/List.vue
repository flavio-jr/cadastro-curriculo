<script>
import curriculoService from '../Services/curriculos.service'

export default {
  data () {
    return {
      curriculos: []
    }
  },

  mounted () {
    curriculoService.getCurriculos()
      .then(curriculos => {
        this.curriculos = curriculos
      })
  }
}
</script>

<template src="./list.html"></template>
<style scoped src="./list.css"></style>
