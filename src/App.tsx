import { useState } from 'react'

import etsy from '../data/etsy.json'

import './App.css'
import Listing from './components/Listing'

function App() {
  const data = JSON.stringify(etsy);

  const [items] = useState<IItem[]>(JSON.parse(data))

  return (
    <div className='container'>
      <Listing items={items}/>
    </div>
  )
}

export default App
