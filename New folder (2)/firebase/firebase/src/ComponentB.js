import React, { useContext } from 'react'
import { store } from './App'

// context api

const ComponentB = () => {
    const [data,setData] = useContext(store)
  return (
    <div className='card'>
        <div clasName='card body'>
             Component B {data}
        </div>
    </div>
  )
}

export default ComponentB
    