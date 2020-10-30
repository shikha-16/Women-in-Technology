import React from "react";
import Layout from "../components/Layout";
import Founder from "../components/FounderComponent";
import Members from "../components/MemberComponent";
import Contributors from "../components/ContributorsComponent";
import Testimonials from "../components/TestimonialsComponent";

export default function CommunityPage() {
  return (
    <Layout>
      <div style={{ height: "5rem" }}></div>
      <Founder />
      <Members />
      <Contributors />
      <Testimonials />
    </Layout>
  );
}
