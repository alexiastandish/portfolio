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
            margin: '0 auto',
            backgroundColor: '#ebeeee',
            borderRadius: '0px',
            top: '40px',
            bottom: '40px',
            left: '40px',
            right: '40px',
          },
        }}
      >
        <button
          className="close-modal-btn"
          style={{ position: 'absolute' }}
          onClick={this.props.closeModal}
        />

        <section className="project-info">
          <div className="left-modal">
            <img src={this.props.project.item.logo} alt="logo" />
            Project: <h3>{this.props.project.item.name}</h3>
            Technologies: <p>{this.props.project.item.techs}</p>
          </div>
          <div className="right-modal">
            <p>{this.props.project.item.description}</p>
            <a href={this.props.project.item.github} target="_blank" rel="noopener noreferrer">
              Go to {this.props.project.item.name} Github repo
            </a>
            <br />
            <a href={this.props.project.item.url} target="_blank" rel="noopener noreferrer">
              Go to {this.props.project.item.name}
            </a>
          </div>
        </section>
      </Modal>
    )
  }
}
export default Project
