import curriculos from './curriculos'

const getCurriculos = () => new Promise((resolve, reject) => resolve(curriculos))

const getCurriculo = id => new Promise((resolve, reject) => curriculos.find((curriculo) => curriculo.id === id))

export default {
  getCurriculos,
  getCurriculo
}
