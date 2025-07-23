import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   <WelcomeMessage />
   <Header />
   <MainContent />
   <UserProfile name="Trevor" age="22" bio="I love coding"/>
   <Footer />
   
    </>
  )
}

export default App
