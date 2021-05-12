import React, { useState } from "react";

export default function Section2({ data }) {
  const [key, setKey] = useState("nav-one");
  const classname = (tab) => `nav-item  ${key === tab ? "active" : ""}`;
  const showImage = (tab) =>
    `tab-pane fade ${key === tab ? "show active" : ""}`;
  const selected = (tab) => (key === tab ? "true" : "false");
  const handelClick = (e) => {
    e.preventDefault();
    setKey(e.target.id);
  };
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mr-auto">
            <h2 className="line-bottom">{data.section2.title}</h2>
          </div>
          <div className="col-md-8 text-right">
            <nav
              className="custom-tab nav nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              {data.section2.tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.className}`}
                  id={tab.className}
                  className={classname(tab.className)}
                  data-toggle="tab"
                  role="tab"
                  aria-controls={tab.className}
                  aria-selected={selected(tab.className)}
                  onClick={handelClick}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              {data.section2.tabs.map((tab, index) => (
                <div
                  key={index}
                  className={showImage(tab.className)}
                  id={tab.className}
                  role="tabpanel"
                  aria-labelledby={`${tab.className}-tab`}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        src={tab.image}
                        alt={`${tab.id}pic`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-4 ml-auto">
                      <h2 className="line-bottom"> {tab.name}</h2>
                      <p>{tab.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
