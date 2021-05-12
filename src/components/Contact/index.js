import React from "react";
import { ContactPage } from "../../SiteData";
import Header from "../Header";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header title={ContactPage.header.title} />

      <div className="site-section bg-light" id="body">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5">
              <h2>{ContactPage.header.title}</h2>
              <p>{ContactPage.header.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form onSubmit={sendEmail}>
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={ContactPage.body.postForm.txtFirstName}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={ContactPage.body.postForm.txtLastName}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={ContactPage.body.postForm.txtEmail}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      placeholder={ContactPage.body.postForm.txtmessage}
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                      value={ContactPage.body.postForm.btnSend}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">
                  {ContactPage.body.contactInfo.title}
                </h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      {ContactPage.body.contactInfo.lbladdress}
                    </span>
                    <span>{ContactPage.body.contactInfo.address}</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      {ContactPage.body.contactInfo.lblphone}
                    </span>
                    <span>{ContactPage.body.contactInfo.phone}</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">
                      {ContactPage.body.contactInfo.lblemail}
                    </span>
                    <span>{ContactPage.body.contactInfo.email}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
