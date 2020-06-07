import React from "react";
import ViewPage from "../ViewPage";
import RoutingPage from "../RoutingPage/RoutingPage";
import Usercrud from "../../../Containers/Usercrud/Usercrud";
import { Route, Link } from "react-router-dom";

const navigation = () => {
  return (
    <React.Fragment>
      <div className="row mx-2 my-3 border border-secondary">
        <div className="col-md">
          <Link to="/dashboard">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Dashboard
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Accounts
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/users">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Users
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/activity">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Activity
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/billings">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Billings
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/settings">
            <button
              type="button"
              className="btn btn-outline-primary m-2 px-lg-4"
            >
              Settings
            </button>
          </Link>
        </div>
        <div className="col-md">
          <Link to="/styleeditors">
            <button type="button" className="btn btn-outline-primary m-2 px-4">
              StyleEditors
            </button>
          </Link>
        </div>
      </div>

      <Route path="/dashboard" exact component={RoutingPage} />
      <Route path="/" exact component={ViewPage} />
      <Route path="/users" exact component={Usercrud} />
      <Route path="/activity" exact component={RoutingPage} />
      <Route path="/billings" exact component={RoutingPage} />
      <Route path="/settings" exact component={RoutingPage} />
      <Route path="/styleeditors" exact component={RoutingPage} />
    </React.Fragment>
  );
};

export default navigation;
