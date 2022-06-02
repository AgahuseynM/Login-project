import 'reflect-metadata'
import {container, injectable} from "tsyringe";
import {AboutService} from "@/pages/about/services/about.service";
import {store} from "@/store"

@injectable()
export class AboutSandbox {
    private service: AboutService
    private store = store
    constructor() {
        this.service = container.resolve(AboutService);
    }

    getItemAboutList(){
        return new Promise((resolve) => {
            this.store.dispatch('setAboutList', 1)
                .then(() => resolve(this.store.getters.getAboutList))
        })
    }
}
