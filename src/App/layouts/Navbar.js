import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <span>Navbar</span>
          <nav>
              <Link to="/">
                Home
              </Link>

              <Link to="/teacher-login">
                Teacher Login
              </Link>
              

              <Link to="/student-login">
                Student Login
              </Link>
          </nav>
    </div>
  )
}

export default Navbar
