import React from "react";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import { footer } from "../../SiteData";

export default function Footer() {
  return (
    <div>
      <footer className="hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="sitemap">&nbsp;</div>
              <div className="footer_tle">{footer.sitemap.lable}</div>
              <ul className="listStyle">
                {footer.sitemap.items.map((item) => (
                  <li key={item.id}>
                    <Nav.Link as={Link} key={item.id} to={item.link}>
                      {item.name}
                    </Nav.Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-sm-3">
              <div className="sitemap">&nbsp;</div>
              <div className="footer_tle">{footer.software.labale}</div>
              <ul className="listStyle">
                {footer.software.items.map((item) => (
                  <li key={item.id}>
                    <Nav.Link as={Link} key={item.id} to={item.link}>
                      {item.name}
                    </Nav.Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-sm-4">
              <div className="sitemap">&nbsp;</div>
              <div className="footer_tle">{footer.hardware.labale}</div>
              <ul className="listStyle">
                {footer.hardware.items.map((item) => (
                  <li key={item.id}>
                    <Nav.Link as={Link} key={item.id} to={item.link}>
                      {item.name}
                    </Nav.Link>
                  </li>
                ))}
              </ul>
              <br />
            </div>

            <div className="col-sm-3">
              <div className="sitemap">{footer.contact.lable}</div>
              <div>
                <div className="f16">{footer.contact.title}</div>
                <br />
                <div className="f12">
                  {footer.contact.address1}
                  <br /> {footer.contact.address2}
                  <br />
                  {footer.contact.address3}
                </div>
                <br />
                <div>
                  <img alt="pin" src={footer.contact.pin} />

                  <a
                    href={footer.contact.googleMap}
                    target="_blank"
                    className="posLocation"
                    rel="noreferrer"
                  >
                    {footer.contact.googleLable}
                  </a>
                </div>

                <br />
                <div className="hotline">
                  <a href={footer.contact.hotline}>
                    <span>
                      <img alt="phone" src={footer.contact.phone} />
                    </span>
                    <span className="orange">
                      {footer.contact.hotlineLable}
                    </span>
                    {footer.contact.mobile}
                  </a>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="greyFooter grey">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <p className="f14">{footer.copyRigth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
