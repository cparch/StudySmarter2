import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

  return (
    <nav>
      <h3>StudySmarter</h3>
      <ul>
        <Link to='/addclass'>
          <li>Add Class</li>
        </Link>

        <Link to='/addtest'>
        <li>Add Test</li>
        </Link>
        
        <Link to='/addstudysession'>
          <li>Add Study Session</li>
        </Link>
        
      </ul>
    </nav>
  )
};

export default Nav;