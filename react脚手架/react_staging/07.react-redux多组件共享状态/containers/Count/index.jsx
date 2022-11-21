//引入Count的UI组件
import CountUI from './count_ui'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { decrement, increment, incrementAsync } from '../../redux/actions/count'
//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    ({count,person}) =>({count,personLength:person.length}),
    {
        increment,
        decrement,
        incrementAsync
    }
    )(CountUI)