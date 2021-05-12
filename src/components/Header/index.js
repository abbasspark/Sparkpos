import React from "react";

export default function Header({ title }) {
  return (
    <div className="ftco-blocks-cover-1">
      <div className="ftco-cover-1 overlay innerpage">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <h1 className="line-bottom">{title}</h1>
            </div>
            <div className="col-lg-5 ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
