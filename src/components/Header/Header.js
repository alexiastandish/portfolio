import React, { Component } from 'react'
//import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }
  render() {
    let resumeData = this.props.resumeData
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <nav id="mobile-nav-wrap">
            {!this.state.navOpen && (
              <button
                className="mobile-btn"
                onClick={() => this.toggleNav()}
                title="Show navigation"
              >
                {/* Show navigation */}
              </button>
            )}
            {this.state.navOpen && (
              <div className="mobile-nav-open">
                <i className="hide" onClick={() => this.toggleNav()} title="Hide navigation">
                  {/* Hide navigation */}
                </i>
                <ul id="mobile-nav" className="nav">
                  <li className="current">
                    <a className="smoothscroll" href="#home">
                      Home
                    </a>
                  </li>

                  <li>
                    <a className="smoothscroll" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio">
                      Works
                    </a>
                  </li>

                  <li>
                    <a className="smoothscroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                <img src="https://i.imgur.com/STZfVlX.png" alt="alexia-logo" />
              </h1>
              <h3 className="header-description">
                {resumeData.intro}. I am a {resumeData.role}. I enjoy learning new technologies,
                creative thinking, problem solving, and coding. When I'm not coding, I spend my time
                boxing, obsessing over my two large doggos, and eating lots of mac and cheese.
              </h3>
              <hr />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#resume">
              <i className="fa fa-angle-down" />
            </a>
          </p>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
