import LandingPage from "../page/LandingPage";
import style from "./style.module.scss";

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
    </div>
  );
}

export default App;
