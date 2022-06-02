import {injectable} from 'tsyringe';
import {RequestInterceptor} from '@/packages/VHttp/interceptors/request.interceptor';
import {ResponseInterceptor} from '@/packages/VHttp/interceptors/response.interceptor';

@injectable()
export class ApiInterceptor extends RequestInterceptor {
    constructor() {
        super();
        this.request();
    }

    request() {
        this.intercept().use((req) => {
            req.headers = {
                ...req.headers,
            }
            return req;
        })
    }
}

export class ApiInterceptorResponse extends ResponseInterceptor {
    constructor() {
        super();
        this.response();
    }

    response() {
        this.interceptor().use((res) => {
            return res;
        }, (error) => {
            return Promise.reject(error);
        });
    }
}
