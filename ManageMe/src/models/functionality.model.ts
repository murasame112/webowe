import {Project} from './project.model';
import {User} from './user.model';
import {Status} from 'src/enums/status.enum';
import {Priority} from 'src/enums/priority.enum';

export type Functionality = {
    name: string | undefined,
    description: string | undefined,
    priority: Priority | undefined,
    project: Project | undefined,
    owner: User | undefined,
    status: Status | undefined,
}
  