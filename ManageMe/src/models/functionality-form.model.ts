import { FormControl, FormGroup} from "@angular/forms"
import { priority } from "src/enums/priority.enum"

export type FunctionalityForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    priority: FormControl<string>,
    projectKey: FormControl<string>,
    ownerKey: FormControl<string>,
    status: FormControl<number>,
}
