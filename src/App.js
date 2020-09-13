import React from 'react';
import classes from './App.modules.css';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
