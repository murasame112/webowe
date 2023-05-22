import {permissions} from 'src/enums/permissions.enum';

export type User = {
    key: string | undefined,
    login: string | undefined,
    password: string | undefined,
    name: string | undefined,
    surname: string | undefined,
    permissions: string | undefined,
}