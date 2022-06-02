import {container, injectable} from 'tsyringe';
import {GET} from '@/packages/VHttp/GET';
import {API} from "@/core/configs/api";

@injectable()
export class AboutService {
    private _get: GET = container.resolve(GET)

    list(): Promise<any> {
        return this._get.setApi(API.about)
            .requestPromise();
    }
}