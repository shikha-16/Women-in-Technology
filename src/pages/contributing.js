import React from 'react';
import BeginnersLinks from '../components/BeginnersLinks/BeginnersLinks';
import Contributing from '../components/Contributing';
import Layout from '../components/Layout';
import Separator from '../components/Separator';

export default function ContributingPage() {
  return (
    <Layout>
      <div style={{ height: '3rem', backgroundColor: '#e5e5e5' }} />
      <Separator />
      <Contributing />
      <Separator />
      {/* <BeginnersLinks /> */}
    </Layout>
  );
}
