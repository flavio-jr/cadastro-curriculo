<script>
import curriculoService from '../Services/curriculos.service'
import DinamicList from '@/components/DinamicList/DinamicList'

export default {
  components: {
    DinamicList
  },

  data () {
    return {
      page: 3,
      direction: 'N',
      sexos: [],
      estadosCivis: [],
      estados: [],
      curriculo: {
        pessoal: {
          name: '',
          idade: '',
          sexo: '',
          estado_civil: '',
          telefone: '',
          email: '',
          descricao: ''
        },
        endereco: {
          estado: '',
          cidade: '',
          logradouro: '',
          bairro: '',
          numero: '',
          referencia: ''
        },
        info: {
          formacoes: [],
          experiencias: [],
          habilidades: []
        }
      }
    }
  },

  computed: {
    getEffect () {
      return this.direction === 'N' ? 'animated fadeOutLeftBig' : 'animated fadeOutRightBig'
    },

    getInEffect () {
      return this.direction === 'N' ? 'animated fadeInRight' : 'animated fadeInLeftBig'
    }
  },

  methods: {
    setPage (page, direction) {
      this.page = page
      this.direction = direction
    },

    validateInformacaoPessoal () {
      this.$validator.validateAll(this.curriculo.pessoal).then((pass) => {
        if (!pass) return

        this.setPage(2, 'N')
      })
    },

    validateInformacaoEndereco () {
      this.$validator.validateAll(this.curriculo.endereco).then((pass) => {
        if (!pass) return

        this.setPage(3, 'N')
      })
    },

    addFormacao () {
      if (!this.curriculo.info.formacao) return

      this.curriculo.info.formacoes.push(this.curriculo.info.formacao)
      this.curriculo.info.formacao = ''
    },

    removeFormacao (index) {
      this.curriculo.info.formacoes.splice(index, 1)
    },

    addHabilidade () {
      if (!this.curriculo.info.habilidade) return

      this.curriculo.info.habilidades.push(this.curriculo.info.habilidade)
      this.curriculo.info.habilidade = ''
    },

    removeHabilidade (index) {
      this.curriculo.info.habilidades.splice(index, 1)
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
