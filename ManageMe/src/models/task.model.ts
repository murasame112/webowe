import {Functionality} from './functionality.model';
import {User} from './user.model';
import {Status} from 'src/enums/status.enum';
import {priority} from 'src/enums/priority.enum';

export type Task = {
    key: string | undefined,
    name: string | undefined,
    description: string | undefined,
    priority: string | undefined,
    functionalityKey: string | undefined,
    // Estimated execution time (in hours)
    exec_time: number | undefined,
    status: Status | undefined,
    added: Date | undefined,
    start: Date | undefined,
    finish: Date | undefined,
    userKey: string | undefined,
}