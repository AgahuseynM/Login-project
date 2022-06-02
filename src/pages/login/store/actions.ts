import {container} from "tsyringe";
import {LoginService} from "@/pages/login/services/login.service";

const service = container.resolve(LoginService);
export const LoginActions = {

    setLogin(context: any, data: any): void {
        service.login(data).then(res => context.commit('setLoginList', res))
    },
}