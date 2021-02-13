import React, { Component } from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h4>Movie Form - {match.params.id}</h4>
      <button className="btn btn-info" onClick={() => history.push("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
