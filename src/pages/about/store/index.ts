import {AboutState} from "@/pages/about/store/state";
import {AboutGetters} from "@/pages/about/store/getters";
import {AboutMutations} from "@/pages/about/store/mutations";
import {AboutActions} from "@/pages/about/store/actions";

const AboutInitial: AboutState = {
    aboutList: []
}

export const AboutModules = {
    state: AboutInitial,
    getters: AboutGetters,
    actions: AboutActions,
    mutations: AboutMutations
}