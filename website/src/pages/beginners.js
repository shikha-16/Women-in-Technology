import React from 'react';
import BeginnersLinks from '../components/BeginnersLinks/BeginnersLinks';
import Layout from '../components/Layout';
import Separator from '../components/Separator';

export default function BeginnersPage() {
  return (
    <Layout>
      <div style={{ height: '3rem', backgroundColor: '#e5e5e5' }} />
      <Separator />
      <BeginnersLinks />
    </Layout>
  );
}
