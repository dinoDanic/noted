import { Route } from "react-router-dom";

import styles from "./app.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import CheckAuth from "./components/check-auth/check-auth.component";
import Auth from "./pages/auth/auth.component";
import Loader from "./components/ui/loader/loader.component";

const App = () => {
  return (
    <>
      <Loader />
      <CheckAuth />
      <div className={styles.app}>
        <Route exact path="/auth" component={Auth} />
      </div>
    </>
  );
};

export default App;
