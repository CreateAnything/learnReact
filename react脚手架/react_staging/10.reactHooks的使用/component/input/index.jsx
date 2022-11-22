import { Fragment, useRef } from 'react'
export default function Input(){
    const myRef = useRef()
    function show(){
        console.log(myRef.current.value)
    }
    return(
        <Fragment>
            <div className="input-group mb-3" style={{width:'300px'}}>
                <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                <input ref={myRef}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button onClick={show}>点我提示数据</button>
            </div>
        </Fragment>
    )
}