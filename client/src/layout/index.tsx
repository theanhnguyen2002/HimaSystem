import LandingPage from "../page/LandingPage";
import style from "./style.module.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={style.App}>
      {/* <Header></Header>
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
      <Footer></Footer> */}
      <LandingPage />
      <ToastContainer
        position="top-right"
        autoClose={30000000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
