import React from 'react';
// import styles from './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
// import { Layout } from './shared/Layout/Layout';

function AppComponent() {
  return (
    <Header/>
    // <Layout>
    //   content
    // </Layout>
  )
};

export const App = hot(AppComponent);