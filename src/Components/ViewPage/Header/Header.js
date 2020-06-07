import React from "react";

const header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-2 border border-secondary">
        <p className="navbar-brand my-auto">LOGO</p>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <p className="ml-auto mr-3 my-auto">Client Search</p>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Get Support
            </button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default header;
