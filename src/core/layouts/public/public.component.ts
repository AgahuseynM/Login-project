import {Options, Vue} from 'vue-class-component';
import HeaderComponent from './components/header/header.component.vue';

@Options({
    name: 'PublicComponent',
    components: {
        HeaderComponent,
    },
})
export default class PublicComponent extends Vue {}
