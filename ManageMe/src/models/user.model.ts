import {Permissions} from 'src/enums/permissions.enum';

export type User = {
    login: string | undefined,
    password: string | undefined,
    name: string | undefined,
    surname: string | undefined,
    permissions: Permissions | undefined,
}