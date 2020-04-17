import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-first-order"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Prophecy Web Solutions</h1>
        <p>Miami based web development and design agency specializing <br /> in sites that focus on your clients optimal user experience</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('solutions')
            }}
          >
            Solutions
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

{/* <p>
A fully responsive site template designed by{' '}
<a href="https://html5up.net">HTML5 UP</a> and released
<br />
for free under the{' '}
<a href="https://html5up.net/license">Creative Commons</a> license.
</p> */}
