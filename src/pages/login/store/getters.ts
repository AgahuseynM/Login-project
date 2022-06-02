import {ILogin} from "@/pages/login/types/login";
import {LoginState} from "@/pages/login/store/state";

export const LoginGetters = {
    getLogin:(state: LoginState): ILogin[] => {
        return state.iLogin
    }
}