import React from "react";
import { Link } from "react-router-dom";
import './pageNotFound.css'; // Import Page Not Found styles

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;
