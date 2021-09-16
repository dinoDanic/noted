import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setIsLoading } from "../../redux/body/body.actions";

const CheckAuth = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const path = history.location.pathname.split("/")[1];

  useEffect(() => {
    if (user.email === "") {
      history.push("/auth");
    } else {
      if (path === "auth") {
        history.push("/");
        dispatch(setIsLoading(false));
      }
    }
  }, [user, history, path, dispatch]);

  return null;
};

export default CheckAuth;
