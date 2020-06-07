import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="container text-center">
      <h1 className="display-4">404: Page Not Found</h1>
      <p style={{ marginTop: "20px", marginBottom: "20px" }}>
        Sorry, the page you are looking for doesn't exists.
      </p>
      <Link to="/">
        <button className="btn btn-lg btn-primary">Return Home</button>
      </Link>
    </div>
  );
};
