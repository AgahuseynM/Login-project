import {LoginState} from "@/pages/login/store/state";

export const LoginMutations = {
    setLoginList(state: LoginState, payload: any): void {
        console.log(payload);
        state.iLogin = payload;
    }
}