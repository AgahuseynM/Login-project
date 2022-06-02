import {Options, Vue} from 'vue-class-component';
@Options({
    name: 'BreadcrumbComponent',
})
export default class BreadcrumbComponent extends Vue {
    /**
     *@description Full link to the page
     */
    public links: any = [];
    /**
     * @description link to the page
     */
    public pageLinks: any = '';

    /**
     *@description  set arbitrary information to routes in links and pageLinks variables
     */
    public created():void {
        this.crumbs();
        this.$watch(
            () => this.$route.matched,
            async () => {
                await this.crumbs();
            }
        )
    }
    public  crumbs():void {
        this.links = this.$route.matched;
        this.pageLinks = this.$route.path;
    }
}
