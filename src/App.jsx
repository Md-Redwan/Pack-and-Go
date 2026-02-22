import './App.css'
import ChooseUs from './components/ChooseUs'
import Discover from './components/Discover'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopularDestination from './components/PopularDestination'
import TravelBenefit from './components/TravelBenefit'
import TopDestination from './components/TopDestination'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TravelBenefit/>
      <PopularDestination/>
      <Discover/>
      <ChooseUs/>
      <TopDestination/>
    </>
  )
}

export default App
