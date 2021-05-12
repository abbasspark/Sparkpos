import React from "react";
import Header from "../Header";
import { ServicePage } from "../../SiteData";
export default function Services() {
  return (
    <div>
      <Header title={ServicePage.header.title} />

      <div
        className="site-section"
        style={{ backgroundColor: "#dedffe" }}
        id="body"
      >
        <div className="container">
          <div className="row align-items-stretch">
            {ServicePage.body.items.map((item) => (
              <div key={item.id} className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                <div className="service-2 h-100">
                  <div className="svg">
                    <img
                      src={item.image}
                      alt={`${item.id}_image`}
                      className=""
                    />
                  </div>

                  <h3>
                    <span>{item.title}</span>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
