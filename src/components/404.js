import React from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function NotFound() {
  return (
    <div>
      <Header>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 className="text-center">Page Not Found</h1>
          </div>
        </div>
      </Header>
      <Footer />
    </div>
  );
}
