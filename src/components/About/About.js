import React, { Component } from 'react'
//import './About.css';

class About extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="about">
        <div className="about-section">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />

          <div className="contact-info">
            <h2>Contact Details</h2>
            <div className="address">
              <p className="left-address">
                <span>{resumeData.name}</span>
                <span>{resumeData.address}</span>
              </p>
              <p className="right-address">
                <span>{resumeData.website}</span>
                <span>{resumeData.phone}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="social">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map(item => {
                return (
                  <li key={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <i className={item.className} />
                    </a>
                  </li>
                )
              })}
          </ul>
        </div>
      </section>
    )
  }
}
export default About
