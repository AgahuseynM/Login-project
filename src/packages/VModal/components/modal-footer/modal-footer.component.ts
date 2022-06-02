import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'ModalFooterComponent',
    props: {
        footer: {
            type: Boolean,
            required: true,
        },
    },
})
export default class ModalFooterComponent extends Vue {
}
