import React from "react";
import { DownloadPage } from "../../SiteData";
import Header from "../Header";
export default function Download() {
  // const handledownload = (e) => {
  //   e.preventDefault();
  //   let url = `downloads/SparkPOS.rar`;
  //   fetch(url).then((response) => {
  //     console.log({ response });
  //     response.blob().then((blob) => {
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement("a");
  //       a.href = url;
  //       a.download = "SparkPOS.rar";
  //       a.click();
  //     });
  //     //window.location.href = response.url;
  //   });
  // };
  return (
    <div>
      <Header title={DownloadPage.header.title} />
      <div className="site-section bg-light" id="body">
        <div className="container">
          <div className="row">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>{DownloadPage.header.title}</h1>
                <p>{DownloadPage.header.description}</p>
              </div>
            </div>
            <div className="col-lg-8 mb-5">
              {/* <form onSubmit={handledownload}> */}
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={DownloadPage.body.downloadForm.txtFirstName}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={DownloadPage.body.downloadForm.txtLastName}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={DownloadPage.body.downloadForm.txtEmail}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <a
                    href="downloads/SparkPOS.rar"
                    className="btn btn-block btn-primary text-white py-3 px-5"
                    download
                  >
                    {DownloadPage.body.downloadForm.btnDownload}
                  </a>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
