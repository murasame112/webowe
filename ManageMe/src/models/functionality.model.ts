import {Project} from './project.model';
import {User} from './user.model';
import {Status} from 'src/enums/status.enum';
import {Priority} from 'src/enums/priority.enum';

export type Functionality = {
    key: string | undefined
    name: string | undefined,
    description: string | undefined,
    priority: Priority | undefined,
    projectKey: string | undefined,
    ownerKey: string | undefined,
    status: Status | undefined,
}
  