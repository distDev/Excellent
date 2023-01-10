import { signOut } from "firebase/auth";

import { logoutUser } from "../Store/slices/user-slice";
import { routerConst } from "../Utils/routerConst";
import { useAppDispatch } from "../Hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { authentication } from "../Firebase/firebase-config";

export const useLogout = (): any => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        dispatch(logoutUser());
        navigate(routerConst.MAIN_ROUTE);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return handleLogout;
};
