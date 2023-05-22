import {Project} from './project.model';
import {User} from './user.model';
import {Status} from 'src/enums/status.enum';
import {priority} from 'src/enums/priority.enum';

export type Functionality = {
    key: string | undefined
    name: string | undefined,
    description: string | undefined,
    priority: string | undefined,
    projectKey: string | undefined,
    ownerKey: string | undefined,
    status: Status | undefined,
}
  