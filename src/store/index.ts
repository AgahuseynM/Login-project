import {createStore} from 'vuex';
import {LoginModules} from "@/pages/login/store";

export const store = createStore({
  modules: {
    loginState: LoginModules
  },
});
