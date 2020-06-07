import React from "react";
import { Link, Route } from "react-router-dom";
import routingPage from "../RoutingPage/RoutingPage";

const licenseSection = () => {
  return (
    <React.Fragment>
      <div className="m-4">
        <h3>License</h3>
        <div className="row mt-5">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">License Key</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="keynumber"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Domain</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  placeholder="domainname"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">License Type</label>
                <span>
                  <Link to="/upgrade">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm ml-5 px-3 py-0"
                    >
                      Upgrade
                    </button>
                  </Link>
                </span>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  placeholder="5 Users License"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">License Status</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  placeholder="active"
                />
              </div>
            </form>
          </div>
          <div className="col-md-8 mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Registration Date</th>
                  <th scope="col">Next Due Date</th>
                  <th scope="col">Billing Cycle</th>
                  <th scope="col">Payment Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuesday, May 26, 2020</td>
                  <td>Tuesday, May 26, 2020</td>
                  <td>Monthly</td>
                  <td>Credit Card</td>
                </tr>
              </tbody>
            </table>
            <Link to="/viewbillings">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm px-5 float-right"
              >
                View Billing
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <Route path="/upgrade" exact component={routingPage} />
      <Route path="/viewbillings" exact component={routingPage} />
    </React.Fragment>
  );
};

export default licenseSection;
