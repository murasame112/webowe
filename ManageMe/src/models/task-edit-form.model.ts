import { Form, FormControl, FormGroup} from "@angular/forms"
import { Project } from "./project.model"
import { User } from "./user.model"
import { Functionality } from "./functionality.model"

export type TaskEditForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    priority: FormControl<string>,
    functionalityKey: FormControl<Functionality>,
    exec_time: FormControl<number>,
    ownerKey: FormControl<User>,
    status: FormControl<string>,
}
