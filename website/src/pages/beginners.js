import React from "react";

import BeginnersLinks from "../components/BeginnersLinks/BeginnersLinks";
import Layout from "../components/Layout";

export default function BeginnersPage() {
  return (
    <Layout>
      <div style={{ height: "3rem", backgroundColor: "#e5e5e5" }} />
      <BeginnersLinks />
      {/* <BeginnersLinks /> */}
    </Layout>
  );
}