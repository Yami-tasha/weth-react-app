import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <span>
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              id="city-input"
              type="search"
              placeholder="Tipe a city name"
              className="form-control btn2"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100 btn1"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </span>
  );
}
