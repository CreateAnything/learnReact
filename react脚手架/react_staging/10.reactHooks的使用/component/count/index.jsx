import { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
export default function Count(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState('wmq')
    function add(){
        // setCount(count+1)//第一种写法
        setCount(count =>count+1)    
    }

    function changeName(){
        setName('jack')
    }

    function onMount(){
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    /**
     * useEffect如果不传第二个参数则
     */
    useEffect(() =>{
        let timer =  setInterval(() =>{
            setCount(count =>count+1)
        },500)
        return () =>{
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h2>当前求和为:{count}</h2>
            <h2>我的名字是:{name}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={onMount}>卸载组件</button>
        </div>
    )
}
