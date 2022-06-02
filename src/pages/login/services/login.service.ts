import {container, injectable} from "tsyringe";
import {API} from "@/core/configs/api";
import {POST} from "@/packages/VHttp/POST";

@injectable()
export class LoginService {
    private _post: POST = container.resolve(POST)

    login(data: any): Promise<any> {
        console.log(data)
        return this._post.setApi(API.login)
            .setPayload(data)
            .requestPromise()
    }
}