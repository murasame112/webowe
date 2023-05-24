import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  protected projectKey!: string
  private routeSub!: Subscription
  constructor(private readonly activatedRoute: ActivatedRoute ) {}
  ngOnInit(): void {    
    this.projectKey = this.activatedRoute.snapshot.params['key'];
    console.log(this.projectKey);

  }
}

     