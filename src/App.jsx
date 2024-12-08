
import './App.css'
import Banner from './Components/Banner'
import Fotter from './Components/Fotter'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Portfolio from './Components/Portfolio'
import Review from './Components/Review'
import Services from './Components/Services'
import TeamMemberCard from './Components/TeamMemberCard'

function App() {
 

  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Portfolio/>
      <TeamMemberCard/>
      <Review/>
      <News/>
      <Fotter/>
    </>
  )
}

export default App
