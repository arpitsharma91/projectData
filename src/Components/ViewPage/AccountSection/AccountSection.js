import React from "react";
import { Link, Route } from "react-router-dom";
import routingPage from "../RoutingPage/RoutingPage";

const accountSection = () => {
  return (
    <React.Fragment>
      <div className="m-4">
        <h3>Account</h3>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <p className="col-md-3">Company:</p>
              <p className="col-md-9">Notary Services LLC</p>
            </div>
            <div className="row">
              <p className="col-md-3">Address:</p>
              <p className="col-md-9">1350 N Stemmons Fwy Dallas, TX 75207</p>
            </div>
            <div className="row">
              <p className="col-md-3">Phone:</p>
              <p className="col-md-9">214-255-2520</p>
            </div>
          </div>
          <div class="col-md-8">
            <Link to="/edit">
              <button type="button" class="btn btn-outline-primary btn-sm px-5">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <Route path="/edit" exact component={routingPage} />
    </React.Fragment>
  );
};

export default accountSection;
