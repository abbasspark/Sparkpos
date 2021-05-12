import React from "react";
import { HomePage } from "../../SiteData";
import Header from "../Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default function Home() {
  return (
    <div>
      <Header title={HomePage.header.title} />
      <Section1 data={HomePage.body} />
      <Section2 data={HomePage.body} />
      <Section3 data={HomePage.body} />
    </div>
  );
}
