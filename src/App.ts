import 'reflect-metadata';
import { Options, Vue } from 'vue-class-component';
import {container} from 'tsyringe';
import {ApiInterceptor} from '@/core/interceptors/api.interceptor';

@Options({
  name: 'App',
})
export default class AppComponent extends Vue {
  private interceptor = container.resolve(ApiInterceptor);
}
