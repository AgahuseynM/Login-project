import {AboutState} from "@/pages/about/store/state";

export const AboutMutations = {
    setAboutList(state: AboutState, payload: any): void {
        console.log(payload);
        state.aboutList = payload;
    }
}