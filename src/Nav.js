import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Xmas Warrior
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    North Pole
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Santa's Stats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Naughty List Locater
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
