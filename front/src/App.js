import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import styles from "./app.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import CheckAuth from "./components/check-auth/check-auth.component";
import Auth from "./pages/auth/auth.component";
import Loader from "./components/ui/loader/loader.component";
import FnBar from "./components/fn-bar/fn-bar.component";
import Home from "./pages/home/home.page";

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Loader />
      <CheckAuth />
      <div className={styles.app}>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
      </div>
      <AnimatePresence>{user && <FnBar />}</AnimatePresence>
    </>
  );
};

export default App;
