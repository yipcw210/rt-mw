import React, { Component } from "react";
import Jaws from "../assets/images/posters/Jaws.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Movie extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Jaws} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Jaws</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div
              className="card-footer d-flex justify-content-around"
              style={{ fontSize: "1.5rem" }}
            >
              <button
                className="btn btn-success"
                style={{ fontSize: "1.5rem" }}
              >
                <FontAwesomeIcon icon={["far", "thumbs-up"]} />
                <span className="ml-2">0</span>
              </button>

              <button className="btn btn-danger" style={{ fontSize: "1.5rem" }}>
                <FontAwesomeIcon icon={["far", "thumbs-down"]} />
                <span className="ml-2">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
