import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'ModalHeaderComponent',
    /**
     * @description props for modal-component
     * @param title: String
     */
    props: {
        title: String,
        close: {
            type: Function,
            required: true,
        },
    },
})
export default class ModalHeaderComponent extends Vue {
}
