import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <main role="main" className="inner cover">
            <h1 className="cover-heading">Services</h1>
            <p className="lead">Coming Soon...</p>
            <p className="lead">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} bounce className='icon-black'/>
              </Link>
            </p>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Services;
