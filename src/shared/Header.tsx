import { hot } from 'react-hot-loader/root'
import * as React from 'react';
// import  styles  from './header.css';

function HeaderComponent() {
  return (
    <header>
      {/* <h1 className={styles.example}> My React App </h1> */}
      <h1> My React App </h1>
    </header>
  );
};

export const Header = hot(HeaderComponent);