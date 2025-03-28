import React, { useContext } from 'react'
import { CountContext } from './Context'
export default function Header() {
    let count = useContext(CountContext)
  return (
    <div>
        {count}
    </div>
  )
}
