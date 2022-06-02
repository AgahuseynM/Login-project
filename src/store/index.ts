import {createStore} from 'vuex';
import {LoginModules} from "@/pages/login/store";
import {AboutModules} from "@/pages/about/store";

export const store = createStore({

  modules: {
    loginState: LoginModules,
    aboutState: AboutModules
  },
});
