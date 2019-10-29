import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

)

export default store