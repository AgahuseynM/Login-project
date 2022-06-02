import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'tab-header',
    props: {
        tabHeader: {
            type: Array,
            required: true
        }
    }
})

export default class TabHeaderComponent extends Vue {
    public tabHeader: any[] = [];
    public active: number = 1;

    public changeHeader(e:number): void {
        this.active = e;
        this.$emit('changedTitle',e)
    }
}
