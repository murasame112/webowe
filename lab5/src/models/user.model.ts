
import { FormControl, FormGroup} from "@angular/forms"

export type UserAdres = {
  city: FormControl<string>,
  street: FormControl<string>,
  postalCode: FormControl<string>,
  number: FormControl<number | null>,
}

export type User = {
  name: FormControl<string>,
  surname: FormControl<string>,
  adress: FormGroup<UserAdres>

}

