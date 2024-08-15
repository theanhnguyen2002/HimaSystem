import React from 'react';
import style from './style.module.scss';
import Footer from './footer';

function App() {
  return (
    <div className={style.App}>
      <header className={style.App_header}>
        <p className='text-red-700'>
          header
        </p>
        <a
          className={style.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home page
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
