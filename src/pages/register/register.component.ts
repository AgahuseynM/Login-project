import {Options, Vue} from "vue-class-component";

@Options({
    name: 'RegisterComponent'
})
export default class RegisterComponent extends Vue {
    public confirmPassword =''
     public userInfo = {
         username: '',
         email: '',
         password: '',
     };
}