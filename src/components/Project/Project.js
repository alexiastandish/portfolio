import React, { Component } from 'react'
import './Project.css'
import Modal from 'react-modal'

class Project extends Component {
  render() {
    return (
      <Modal
        isOpen
        onRequestClose={this.props.closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 10,
          },
          content: {
            width: '80vw',
            height: '80vh',
            top: '10vh',
            margin: '0 auto',
            backgroundColor: '#ebeeee',
            backgroundImage: `url(${this.props.project.item.backgroundImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0px',
          },
        }}
      >
        <div className="modal-style">
          <button
            className="close-modal-btn"
            style={{ position: 'absolute' }}
            onClick={this.props.closeModal}
          />

          <section className="project-info">
            <div className="header">
              <img src={this.props.project.item.logo} alt="logo" />
              Project: <h3>{this.props.project.item.name}</h3>
              Technologies: <p>{this.props.project.item.techs}</p>
              <p>{this.props.project.item.description}</p>
              <a href={this.props.project.item.github} target="_blank" rel="noopener noreferrer">
                Go to {this.props.project.item.name} Github repo
              </a>
              <a href={this.props.project.item.url} target="_blank" rel="noopener noreferrer">
                Go to {this.props.project.item.name}
              </a>
            </div>
          </section>
        </div>
      </Modal>
    )
  }
}
export default Project
