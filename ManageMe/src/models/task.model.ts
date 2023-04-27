import {Functionality} from './functionality.model';
import {User} from './user.model';

export type Task = {
    name: string | undefined,
    description: string | undefined,
    priority: number | undefined,
    functionality: Functionality | undefined,
    // Estimated execution time (in hours)
    exec_time: number | undefined,
    status: number | undefined,
    added: Date | undefined,
    start: Date | undefined,
    finish: Date | undefined,
    user: User | undefined
}