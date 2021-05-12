import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { navItems, Brand } from "../../SiteData";
export default function NavbarControl() {
  const [state, setstate] = useState();

  const className = (link) => (link === state ? "active" : "inactive");
  const handleCheck = (e) => {
    setstate(e);
  };
  return (
    <div className="site-wrap" id="home-section">
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-start  position-relative">
            <div className="col-2 ">
              <div className="site-logo logo">
                <Nav.Link
                  as={Link}
                  to={Brand.link}
                  onClick={() => handleCheck(Brand.link)}
                  className="logo "
                />
              </div>
            </div>
            <div className="col-9  text-right">
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu  main-menu js-clone-nav ml-auto ">
                  {navItems.map((nav) => (
                    <li key={nav.id} className={className(nav.link)}>
                      <Nav.Link
                        as={Link}
                        key={nav.id}
                        to={nav.link}
                        onClick={() => handleCheck(nav.link)}
                        className="nav-link"
                      >
                        {nav.name}
                      </Nav.Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
