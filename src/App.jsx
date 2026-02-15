import './App.css'
import Discover from './components/Discover'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopularDestination from './components/PopularDestination'
import TravelBenefit from './components/TravelBenefit'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TravelBenefit/>
      <PopularDestination/>
      <Discover/>
    </>
  )
}

export default App
