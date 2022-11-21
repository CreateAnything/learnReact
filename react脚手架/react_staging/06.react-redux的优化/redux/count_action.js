/**
 * 该文件专门为count组件生成action对象
 */
import { DECREMENT, INCREMENT } from './constant'
//同步Aaction返回一个对象{type:xxx,data:xxx}
export const createIncrementAction = data =>({type:INCREMENT,data})

export const createDecrementAction = data =>({type:DECREMENT,data})

//异步Action须返回一个函数,异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch) =>{
        setTimeout(() =>{
            dispatch(createIncrementAction(data))//通知reducer更新状态
        },time)
    }
}