import React, { Component } from 'react'
import Modal from 'react-modal'
import Project from '../Project/Project'

//import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isProjectModalOpen: false,
      selectedProject: {},
    }
  }
  componentDidMount() {
    Modal.setAppElement('body')
  }

  showModal = item => {
    this.showModal(item)
  }

  showModal = selectedProject => {
    this.setState({ isProjectModalOpen: true, selectedProject })
  }

  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="portfolio">
        <div className="row">
          <div>
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  console.log('item', item)
                  return (
                    <div className="portfolio-item" key={index}>
                      <div className="project-link">
                        <img
                          src={item.imgurl}
                          alt="project"
                          onClick={() => this.showModal({ item })}
                        />
                      </div>

                      {this.state.isProjectModalOpen && (
                        <Project
                          project={this.state.selectedProject}
                          closeModal={() => {
                            this.setState({ isProjectModalOpen: false })
                          }}
                        />
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Portfolio
