import React from 'react';
import BeginnersLinks from '../components/BeginnersLinks';

import Contributing from '../components/Contributing/';
import Layout from '../components/Layout';
import Separator from '../components/Separator';

   
export default function ContributingPage() {
  return (
    <Layout>
      <div style={{height: '15rem', backgroundColor: '#e5e5e5'}}></div>
      <Separator />
      <Contributing />
      <Separator />
      <BeginnersLinks />
    </Layout>
  );
}
