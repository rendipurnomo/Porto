import React from 'react';
import './App.scss';
import {
  Header,Footer,About, Skills, Work
} from './container';
import {SideBar} from './components'

function App() {

  return (
    <div className="main">
      <SideBar/>
    <div className='app'>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
    </div>
  )
}

export default App;
