import React, { Component } from 'react'
import About from '../About/About'
//import './Contact.css';

class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="contact">
        <div className="row">
          <About resumeData={resumeData} />
        </div>
      </section>
    )
  }
}
export default Contact
