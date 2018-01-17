export default {
  br: {
    messages: {
      required: () => 'Campo obrigatório',
      min_value: (field, value) => 'Valor mínimo: ' + value,
      regex: () => 'Formato inválido',
      email: () => 'Email inválido'
    }
  }
}
