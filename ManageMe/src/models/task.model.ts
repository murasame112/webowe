import {Functionality} from './functionality.model';
import {User} from './user.model';
import {Status} from 'src/enums/status.enum';
import {Priority} from 'src/enums/priority.enum';

export type Task = {
    name: string | undefined,
    description: string | undefined,
    priority: Priority | undefined,
    functionality: Functionality | undefined,
    // Estimated execution time (in hours)
    exec_time: number | undefined,
    status: Status | undefined,
    added: Date | undefined,
    start: Date | undefined,
    finish: Date | undefined,
    user: User | undefined,
}