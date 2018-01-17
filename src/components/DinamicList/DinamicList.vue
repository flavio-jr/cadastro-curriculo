<script>
export default {
  props: {
    value: Array,
    slug: String,
    title: String,
    icon: String,
    msg: String
  },

  data () {
    return {
      currentInput: '',
      list: []
    }
  },

  methods: {
    addItem () {
      if (!this.currentInput) return

      this.list.push(this.currentInput)
      this.$emit('input', this.list)

      this.currentInput = ''
    },

    removeItem (index) {
      this.list.splice(index, 1)
      this.$emit('input', this.list)
    },

    emitEditChange () {
      this.$emit('input', this.list)
    }
  }
}
</script>

<template src="./dinamic-list.html"></template>
<style src="./dinamic-list.css"></style>
