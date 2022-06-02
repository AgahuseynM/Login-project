import 'reflect-metadata'
import {container, injectable} from "tsyringe";
import {LoginService} from "@/pages/login/services/login.service";
import {store} from "@/store";
import {ILogin} from "@/pages/login/types/login";

@injectable()
export class LoginSandbox {
    private service: LoginService
    private store = store
    constructor() {
        this.service = container.resolve(LoginService);
    }

    getItemLoginList(data: ILogin) {
        return new Promise((resolve) => {
            this.store.dispatch('setLogin', data)
                .then(() => resolve (this.store.getters.getLogin))
        })
    }
}