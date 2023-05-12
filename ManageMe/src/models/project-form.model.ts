import { FormControl, FormGroup} from "@angular/forms"

export type ProjectForm = {
    name: FormControl<string>,
    description: FormControl<string>,
   // active: FormControl<boolean> | undefined,
}