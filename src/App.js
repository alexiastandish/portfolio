import React, { Component } from 'react'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import ContactUs from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import resumeData from './resumeData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    )
  }
}

export default App
