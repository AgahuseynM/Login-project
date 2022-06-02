import {environment} from '@/core/configs/app.config';

export const API = {
    login: environment.apiMain + 'identity/login',
    about: environment.apiMain + 'about'
};
