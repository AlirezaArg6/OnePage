import React from "react";

import "./Clients.css";

export default function Clients() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="client-boxes">
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
          <div className="client-box">
            <img
              src={require("../../images/client-4.png")}
              alt=""
              className="client-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
