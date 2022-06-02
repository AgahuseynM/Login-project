import {container} from "tsyringe";
import {AboutService} from "@/pages/about/services/about.service";

const service = container.resolve(AboutService)
export const AboutActions = {

    setAboutList(context: any): void {
        service.list().then(res => context.commit('setAboutList', res.data))
    }
}