import { useEffect } from "react";
import Session from "@/libs/session";

export const useAuth = ({
     middleware,
     redirectIfAuthenticated,
     router,
} = {}) => {
     const user = Session.user();

     const setUser = (user)=>{
          Session.setUser(user)
     }
     const logout = () => {
          Session.destroy();
          router.push("/");
     };
     

     useEffect(() => {
          if (middleware == "guest" && redirectIfAuthenticated && user)
               router.push(redirectIfAuthenticated);
          if (middleware == "auth" && !user) logout();
     }, []);

     return {
          user,
          setUser,
          logout
     };
};
