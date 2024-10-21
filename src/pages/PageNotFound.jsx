import React from 'react';
import { NavLink } from 'react-router-dom';
import './pageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-content">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <NavLink to="/" className="go-back-button">
          Go Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
