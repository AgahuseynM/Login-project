import {Options,Vue} from 'vue-class-component';

@Options({
    name: 'VDropdown',
    /**
     * @description props for button-component
     *
     */
})
export default class DropdownComponent extends Vue {
    public visible: boolean = false;
    public value : String = 'Action'

    public toggle(): void {
        this.visible = !this.visible;
    }
    public set(option: string): string {
        return this.value = option
    }
}
