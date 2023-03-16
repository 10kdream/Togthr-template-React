import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#about" className="navigation-links-link">
        {props.text}
      </a>
      <a href="#listen" className="navigation-links-link1">
        {props.text1}
      </a>
      <a href="#whatido" className="navigation-links-link2">
        {props.text2}
      </a>
      <a href="#contact" className="navigation-links-link3">
        {props.text3}
      </a>
      <a href="#blog" className="navigation-links-link4">
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text1: 'Listen',
  text3: 'Contact',
  text: 'About',
  text2: 'What I Do',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
