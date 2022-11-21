//该文件专门用于暴露一个store对象，整个应用只有一个store对象
//引入createStire,专门用与创建核心的store对象
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))