import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
  <div>
    <h1>Hi from the ThirdPage</h1>
    <Link to="/page-3/">Page 3</Link>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ThirdPage