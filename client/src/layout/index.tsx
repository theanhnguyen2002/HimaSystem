import React from 'react';
import style from './style.module.scss';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Search from '../components/search';

function App() {
  return (
    <div className={style.App}>
      <Header></Header>
      <div className="">
        <Search/>
      </div>
      <div className={style.App_header}>
        <a
          className={style.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home page
          <Outlet/>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
