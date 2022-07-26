import React from 'react';
import logo from '../images/logo.png';
import{Link} from 'react-scroll';

function Navbar(){
return (
    <nav className="nav">
      <Link to='main' className='logo'>
          <img src={logo} />
      </Link>

      <ul className='menu'>
          <li><Link to='main' >Social Network</Link></li>
          <li><Link to='features'>Drug Database</Link></li>
          <li><Link to='offer'>Medical Calculator</Link></li>
          <li><Link to='about'>Article</Link></li>
          <li><Link to='contact' active>News</Link></li>
          <li><Link to='about'>Quizzes</Link></li>
          <li><Link to='about'>Surveys</Link></li>
          <li><Link to='about'>Drug Interaction</Link></li>
          <li><Link to='about'>Diseases Database</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar
