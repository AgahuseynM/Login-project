import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'pagination-component',
    props: {
        items: {
            type: Array,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        dataCount: {
            type: Number,
            required: true
        }
    },
})

export default class PaginationComponent extends Vue {

    public items: any[] = [];
    public offset: number = 0;
    public limit: number = 10;
    public dataCount: number = 0;
    public pageCount: number = Math.ceil(this.dataCount / this.limit);

    public countPage(): number {
        return Math.ceil(this.dataCount / this.limit);
    }

    public findCurrentPage(): number {
        return Math.floor(this.offset / this.limit) + 1;
    }

    public previosPage(): void {
        let findCurrentP = this.findCurrentPage() - 1;
        this.changePages(findCurrentP);
    }

    public nextPage(): void {
        let findCurrentP = this.findCurrentPage() + 1;
        this.changePages(findCurrentP);
    }


    public changePages(item: any): void {
        this.offset = (item - 1) * this.limit
        let payload = {
            offset: this.offset,
            limit: this.limit
        }
        this.$emit('changePage', payload);
    }

}
