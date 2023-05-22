import { FormControl, FormGroup} from "@angular/forms"
import { Project } from "./project.model"
import { User } from "./user.model"

export type FunctionalityForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    priority: FormControl<string>,
    projectKey: FormControl<Project>,
    ownerKey: FormControl<User>,
}
