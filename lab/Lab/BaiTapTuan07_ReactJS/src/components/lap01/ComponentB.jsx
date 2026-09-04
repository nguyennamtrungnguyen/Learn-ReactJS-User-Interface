import React from 'react'
import { useRecoilState } from 'recoil'
import { CountState } from '../../recoil/CountState'

const ComponentB = () => {
    const [count, setCount] = useRecoilState(CountState)
  return (
    <div>
        <button style={{backgroundColor:"blue", padding: 10}} onClick={()=>{setCount(count+1)}}>+</button>
        <button style={{backgroundColor:"red", padding:10}} onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  )
}

export default ComponentB