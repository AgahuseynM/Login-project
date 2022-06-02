import {Options, Vue} from 'vue-class-component';
import TabHeaderComponent from '@/packages/VTabs/components/tab-header/tab-header.component.vue';
// TODO: [x] (Nicat) component adı kebab-case
// TODO: [x] (Nicat) istifade olunmayan variable"leri silmek

@Options({
    name: 'TabsWrapperComponent',
    components: {
        TabHeaderComponent,
    },
    props: {
        tabWrapperHeader: {
            type: Array,
            required: true,
        },
        contentCount: {
            type: Number,
        },
    },
})

export default class TabsWrapperComponent extends Vue {

    public tabWrapperHeader: any[] = [];
    public contentCount: number = 0;
    public active: number = 1;

    public showContentIndex(e: any): void {
        this.active = e;
        this.$emit('showIndex', this.active);
    }

}
