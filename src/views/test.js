import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>test - Togthr template</title>
        <meta property="og:title" content="test - Togthr template" />
      </Helmet>
    </div>
  )
}

export default Test
