import curriculos from './curriculos'
import axios from 'axios'

const getCurriculos = () => new Promise((resolve, reject) => resolve(curriculos))

const getCurriculo = id => new Promise((resolve, reject) => curriculos.find((curriculo) => curriculo.id === id))

const getSexoEnum = () => new Promise((resolve, reject) => resolve({'M': 'Masculino', 'F': 'Feminino'}))

const getEstadoCivilEnum = () => new Promise((resolve, reject) => resolve({'C': 'Casado', 'S': 'Solteiro'}))

const getEstados = () => axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

export default {
  getCurriculos,
  getCurriculo,
  getSexoEnum,
  getEstadoCivilEnum,
  getEstados
}
