import {Options, Vue} from 'vue-class-component';
import ModalHeaderComponent from '@/packages/VModal/components/modal-header/modal-header.component.vue';
import ModalBodyComponent from '@/packages/VModal/components/modal-body/modal-body.component.vue';
import ModalFooterComponent from '@/packages/VModal/components/modal-footer/modal-footer.component.vue';
@Options({
    name: 'ModalComponent',
    components: {
        ModalHeaderComponent,
        ModalBodyComponent,
        ModalFooterComponent,
    },
    /**
     * @description props for modal-component
     * @param title: String,
     * position: String, modal__dialog--centered
     * size:String, //sm, md, lg, xl
     * footer:boolean
     */
    props: {
        title: String,
        position: {
            type: String,
            required: false,
        },
        size: {
            type: String,
            default: 'md',
        },
        footer: {
            type: Boolean,
            default: true,
        },
    },
})
export default class ModalComponent extends Vue {
    public toggle: boolean = false;

    public closeModal(): void {
        this.toggle = false;
    }

    public openModal(): void {
        this.toggle = true;
    }
}
