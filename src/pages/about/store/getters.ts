import {AboutList} from "@/pages/about/types/about";
import {AboutState} from "@/pages/about/store/state";

export const AboutGetters = {
    getAboutList: (state: AboutState): AboutList[] => {
        return state.aboutList;
        console.log(state.aboutList)
    }
}