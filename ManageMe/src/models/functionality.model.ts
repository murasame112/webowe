import {Project} from './project.model';
import {User} from './user.model';

export type Functionality = {
    name: string | undefined,
    description: string | undefined,
    priority: number | undefined,
    project: Project | undefined,
    owner: User | undefined,
    // 0 = todo, 1 = doing, 2 = done
    status: number | undefined
}
  