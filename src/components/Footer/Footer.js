import React, { Component } from 'react'
//import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
