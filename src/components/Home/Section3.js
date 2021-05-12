import React from "react";

export default function Section3({ data }) {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mx-auto">
            <h2 className="line-bottom text-center">{data.section3.title}</h2>
          </div>
        </div>
        <div className="row">
          {data.section3.clients.map((client) => (
            <div key={client.id} className="col-lg-6">
              <div className="testimonial-3">
                <div className="vcard d-flex align-items-center">
                  <div className="img-wrap mr-3">
                    <img
                      src={client.image}
                      alt="Funsquare"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <span className="d-block">{client.name}</span>
                    <span className="position">{client.client_from}</span>
                  </div>
                </div>
                <blockquote>{client.description}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
