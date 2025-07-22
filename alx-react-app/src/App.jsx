import WelcomeMessage from './components/WelcomeMessage'
import { MyHeader } from './components/Header'
import { MainContent } from './components/MainContent'
import { MyFooter } from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   <WelcomeMessage />
   <MyHeader />
   <MainContent />
   <MyFooter />
    </>
  )
}

export default App
