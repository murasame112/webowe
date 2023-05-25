import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
import { ProjectForm } from 'src/models/project-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  constructor(private projectService: ProjectService, private readonly fb: FormBuilder, private readonly activatedRoute: ActivatedRoute ) {};
  public edit_project!: FormGroup<ProjectForm>;
  public prj!: Project;
  protected projectKey!: string


  ngOnInit(): void {
    this.projectKey = this.activatedRoute.snapshot.params['key'];
    this.prj = this.projectService.getProjectByKey(this.projectKey)
    this.edit_project = this.fb.nonNullable.group({
      name: this.prj.name as string,
      description: this.prj.description as string,
    });
  }

  onSave() {
    let editedProjectValues = this.edit_project.getRawValue();
    let editedProject: Project = {
      key: this.projectKey,
      name: editedProjectValues.name,
      description: editedProjectValues.description,
      active: false,
    }

    this.projectService.saveProject(editedProject);

    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
  }

}
