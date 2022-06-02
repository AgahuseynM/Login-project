import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'ToastComponent',
    /**
     * @description props for button-component
     *
     */
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'toast--default',
        },
        action: {
            type: Boolean,
            default: true,
        },
    },
})
export default class ToastComponent extends Vue {
    public toggle: boolean = false;

    public closeToast(): void {
        this.toggle = false;
    }

    public openToast(): void {
        this.toggle = true;
    }
}
