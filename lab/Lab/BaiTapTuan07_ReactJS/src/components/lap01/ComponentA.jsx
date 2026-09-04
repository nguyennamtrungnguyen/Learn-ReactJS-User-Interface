import React from 'react'
import {  useRecoilValue } from 'recoil'
import { CountState } from '../../recoil/CountState'

const ComponentA = () => {
    const count= useRecoilValue(CountState)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default ComponentA