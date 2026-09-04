import React from 'react'
import { atom } from 'recoil'

export const CountState = atom({
    key : 'countState',
    default : 0
})
