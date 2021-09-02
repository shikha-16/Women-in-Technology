import React from 'react';
import Layout from '../components/Layout';
import Founder from '../components/Founder/FounderComponent';
import Contributors from '../components/Community/Contributors/ContributorsComponent';
import Testimonials from '../components/Community/Contributors/TestimonialsComponent';

export default function CommunityPage() {
  return (
    <Layout>
      <div style={{ height: '3rem', backgroundColor: '#e5e5e5' }} />
      <Founder />
      <Contributors />
      <Testimonials />
    </Layout>
  );
}
