import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'AlertComponent',
    /**
     * @description props for button-component
     */
    props: {
        title: {
            type: String,
        },
        color: {
            type: String,
        },
    },
})
export default class AlertComponent extends Vue {
}
