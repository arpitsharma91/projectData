import React from "react";

const users = props => {
  const style= {
    width: '48%',
    display: 'inline-block'
  };

  const buttonStyle = {
    maxWidth: 300,
    margin: '0 auto',
    textAlign: 'center'
  }

  return (
    <React.Fragment>
      <div className="card m-2 p-2" style={style}>
        <div className="text-center">
          <h5>{props.name}</h5>
          <h6>{props.email}</h6>
          <p>{props.phone}</p>
        </div>
        <div style={buttonStyle}>
          <button
            type="button"
            style={{marginRight: 20}}
            className="btn btn-primary w-30"
            onClick={props.updated}
          >
            EDIT
          </button>
          <button
            type="button"
            className="btn btn-danger w-30"
            onClick={props.clicked}
          >
            DELETE
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default users;
