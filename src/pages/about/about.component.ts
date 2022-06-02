import 'reflect-metadata'
import {Options, Vue} from "vue-class-component";
import {container} from "tsyringe";
import {AboutSandbox} from "@/pages/about/sandbox/about.sandbox";
import {AboutList} from "@/pages/about/types/about";
import {store} from "@/store";

@Options({
    name: 'AboutComponent'
})

export default class AboutComponent extends Vue {
    private store = store;
    private sandbox: AboutSandbox = container.resolve(AboutSandbox);
    private aboutList: AboutList[] = []

    public addInfo = {
        language: '',
        type: '',
        pages: ''
    }

    get aboutListAll() {
        return this.store.getters.getAboutList;
    }

    created() {
        this.sandbox.getItemAboutList()
    }



    public arrayTest = [
        {
            id: 1,
            language: 'Yeni nəsil elektron imza',
            type: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.',
        },
        {
            id: 2,
            language: 'Yeni nəsil elektron imza',
            type: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.',
        },
        {
            id: 3,
            language: 'Yeni nəsil elektron imza',
            type: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.',
        },
        {
            id: 4,
            language: 'Yeni nəsil elektron imza',
            type: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.',
        },
    ]

    public deleteItem(index: any) {
        this.arrayTest.splice(index, 1)
    }

    public createPost() {
        const newPost = {
            id: Date.now(),
            language: this.addInfo.language,
            type: this.addInfo.type,
            pages: this.addInfo.pages
        }
        this.arrayTest.unshift(newPost)
        this.addInfo.language = ''
        this.addInfo.type = ''
        this.addInfo.pages = ''
    }
}