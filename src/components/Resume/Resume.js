import React, { Component } from 'react'
//import './Resume.css';

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className="row item" key={item.UniversityName}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className="row item" key={item.CompanyName}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="skills-section">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map(item => {
                  return (
                    <li className="single-skill" key={item.skillLogo}>
                      <img src={item.skillLogo} alt="skill" />
                      {item.skillname}
                    </li>
                  )
                })}
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>
    )
  }
}
export default Resume
