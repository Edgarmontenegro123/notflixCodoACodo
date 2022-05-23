import React from 'react';
import NavBar from '../NavBar/NavBar';

const styles = {
  layout: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '100vw',
  },
};

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <header>
        <NavBar />
      </header>
      <div style={styles.container}>{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;