import React from 'react';
import { Grommet } from 'grommet';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children, description = 'HyperSearch is a Javascript library for hyperparameter optimization. It is based on the Python library Hyperopt ' }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <title>HyperSearch: Hyperparameter Optimization for Javascript</title>
      <meta name='description' content={description} />
    </Head>
    <Grommet theme={{ global: { colors: { brand: '#ce5f2f' } } }}>
      <Header />
      {children}
      <Footer />
    </Grommet>
  </React.Fragment>
);

export default Layout;
