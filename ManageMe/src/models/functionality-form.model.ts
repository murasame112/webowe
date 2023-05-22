import { FormControl, FormGroup} from "@angular/forms"

export type FunctionalityForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    priority: FormControl<string>,
    projectKey: FormControl<string>,
    ownerKey: FormControl<string>,
    status: FormControl<string>,
}
