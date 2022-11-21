//引入Count的UI组件
import CountUI from '../../component/count/index'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

//使用connect()()创建并暴露一个Count的容器组件

export default connect(
    state =>({count:state}),
    //mapDispatchToProps一般写法
    // dispatch =>(
    //     {
    //         'increment':num => dispatch(createIncrementAction(num)),
    //         'decrement':num => dispatch(createDecrementAction(num)),
    //         'incrementAsync':(num,time) =>dispatch(createIncrementAsyncAction(num,time))
    //     })
    //mapDispatchToProps
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(CountUI)