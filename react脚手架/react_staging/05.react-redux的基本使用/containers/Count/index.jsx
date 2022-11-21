//引入Count的UI组件
import CountUI from '../../component/count/index'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
/*
    1.mapStateToProps函数返回的对象中的key,就作为传递UI组件props的key,
    2.valu就作为UI组件props的value 
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {count:state}
}
/*
    1.mapDispatchToProps函数返回对象中的key就作为传递给UI组件props的key
    2.value就作为UI组件props的value
    3.mapDispatchToProps用于操作状态
*/
function mapDispatchToProps(dispatch){
    return {
        //通知redux执行加法
        'increment':num => dispatch(createIncrementAction(num)),
        'decrement':num => dispatch(createDecrementAction(num)),
        'incrementAsync':(num,time) =>dispatch(createIncrementAsyncAction(num,time))
    }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)