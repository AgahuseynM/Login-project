import 'reflect-metadata'
import {Options, Vue} from 'vue-class-component';
import {container} from "tsyringe";
import {ILogin} from "@/pages/login/types/login";
import {LoginSandbox} from "@/pages/login/sandbox/login.sandbox";
import {store} from "@/store";

@Options({
  name: 'LoginComponent',
})
export default class LoginComponent extends Vue {
  private store = store
  private sandbox: LoginSandbox = container.resolve(LoginSandbox);

  public loginUser = {
    email: '',
    password: ''
  }

  get login() {
    return this.store.getters.getLogin;
  }

  sendLogin(){
    console.log(this.loginUser)
    this.sandbox.getItemLoginList(this.loginUser)
  }


  public sendToRegister(): void {
    this.$router.push({name: 'register'});
  }
}
