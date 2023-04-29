import { base64decode, base64encode } from "@/libs/strings.js";


export default {
    
     user() {
          try {
               let user = base64decode(
                    window.localStorage.getItem("app-name.application.session")
               );
               return user ? JSON.parse(user) : null;
          } catch (err) { }
          return null;
     },

     setUser(value) {
          return window.localStorage.setItem(
               "app-name.application.session",
               base64encode(JSON.stringify(value))
          );
     },

     destroy() {
          window.localStorage.removeItem("app-name.application.session");
     },

};
