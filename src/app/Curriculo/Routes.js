import List from './List/List'
import Form from './Form/Form'

const curriculoRoutes = [
  {
    path: '',
    name: 'ListCurriculos',
    component: List
  },
  {
    path: 'create',
    name: 'CreateCurriculo',
    component: Form
  }
]

export default curriculoRoutes
