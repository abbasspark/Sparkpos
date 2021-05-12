import React from "react";
import { AboutPage } from "../../SiteData";
import Header from "../Header";
import Footer from "../Footer";
export default function index() {
  return (
    <div>
      <Header title={AboutPage.header.title} />
      <div className="site-section" id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <img
                src={AboutPage.body.image}
                alt="about_image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 mr-lg-0">
              <h2>{AboutPage.body.title}</h2>
              <p>{AboutPage.body.description1}</p>
              <p>{AboutPage.body.description2}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
