import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'VBtn',
    /**
     * @description props for button-component
     *
     */
    props: {
        title: {
            type: String,
        },
        color: {
            type: String,
            default: 'btn--primary',
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'lg',
        },
        type: {
            type: String,
            defaults: 'button',
        },
    },
})
export default class ButtonComponent extends Vue {

}
