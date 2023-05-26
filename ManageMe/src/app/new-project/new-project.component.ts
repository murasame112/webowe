import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
import { ProjectForm } from 'src/models/project-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})

export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectService, private readonly fb: FormBuilder) {}
  @Input() project:Project|undefined;
  new_project!: FormGroup<ProjectForm>;


  
  ngOnInit(): void {
    this.new_project = this.fb.nonNullable.group({
      name: '',
      description: '',
    });
  }

  onSave() {
    let prj = this.new_project.getRawValue();
    this.project = this.projectService.createProject(prj.name, prj.description, false);
    let res = this.projectService.saveProject(this.project);
    if(res == true){
      alert('Done.');
      return true;
    }
    return false;
  }

}
