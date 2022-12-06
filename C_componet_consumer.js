
import {useContext} from 'react'
import counterConext from '../context/couterContext'
export default function C() {

  // tp cnsume the value 
  const counter = useContext(counterConext)

  return (
    <h1> counter  C component value is {counter}</h1>
  )
}
