import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FunctionalityService } from 'src/app/functionality.service';
import { Functionality } from 'src/models/functionality.model';
import { FunctionalityForm } from 'src/models/functionality-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Priority } from 'src/enums/priority.enum';

@Component({
  selector: 'app-new-functionality',
  templateUrl: './new-functionality.component.html',
  styleUrls: ['./new-functionality.component.scss']
})
export class NewFunctionalityComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private readonly fb: FormBuilder) {}
  @Input() functionality: Functionality | undefined;
  new_functionality!: FormGroup<FunctionalityForm>;
  //public priorities = Object.values(Priority);
  priority = '';
  priorities: string[] = [];
  

  ngOnInit(): void {
    this.priorities = Object.keys(this.priority);
    console.log(this.priority);
    this.new_functionality = this.fb.nonNullable.group({
      
      name: '',
      description: '',
      priority: this.priorities,
    });
  }

  onSave() {
    let fun = this.new_functionality.getRawValue();
    console.log(fun);
    // this.project = this.projectService.createProject(prj.name, prj.description, false);
    // this.projectService.saveProject(this.project);

    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
  }
}


