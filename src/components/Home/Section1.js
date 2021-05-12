import React from "react";

export default function Section1({ data }) {
  const registerEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className="site-section" id="body">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pr-md-5 mr-auto">
            <h2 className="line-bottom">{data.section1.title}</h2>
            <p>{data.section1.description}</p>
          </div>
          <div className="col-md-6">
            <div className="quick-contact-form bg-white">
              <h2>{data.section1.getQuotation}</h2>
              <form onSubmit={registerEmail}>
                <div className="form-group">
                  <input
                    name="#name"
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder={data.section1.txtName}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="#email"
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder={data.section1.txtEmail}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="#message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder={data.section1.txtmessage}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value={data.section1.btnLable}
                    className="btn btn-primary px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
