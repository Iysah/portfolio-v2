import { BrowserRouter } from 'react-router-dom'
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Connect
} from './components'
import PreLoader from './components/preloader/preloader'

function App() {

  return (
    <>
      {/* <PreLoader /> */}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Connect />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
