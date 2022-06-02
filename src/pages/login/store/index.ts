import {LoginState} from "@/pages/login/store/state";
import {LoginGetters} from "@/pages/login/store/getters";
import {LoginMutations} from "@/pages/login/store/mutations";
import {LoginActions} from "@/pages/login/store/actions";

const LoginInitial: LoginState = {
    iLogin: []
}

export const LoginModules = {
    state: LoginInitial,
    getters: LoginGetters,
    mutations: LoginMutations,
    actions: LoginActions
}