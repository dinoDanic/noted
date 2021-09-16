import Register from "./components/register/register.component";

import styles from "./app.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Register />
    </div>
  );
};

export default App;
