import styles from "./app.module.scss";
import { useSelector } from "react-redux";

const App = () => {
  const notes = useSelector((state) => state.notes);
  return <div className={styles.app}>app</div>;
};

export default App;
