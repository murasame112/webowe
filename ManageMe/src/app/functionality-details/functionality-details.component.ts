import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityService } from 'src/app/functionality.service';
import { Functionality } from 'src/models/functionality.model';
@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent implements OnInit {
  protected functionalityKey!: string
  public fun!: Functionality;
  
  constructor(private readonly activatedRoute: ActivatedRoute, private functionalityService: FunctionalityService ) {}

  ngOnInit(): void {    
    this.functionalityKey = this.activatedRoute.snapshot.params['key'];
    this.fun = this.functionalityService.getFunctionalityByKey(this.functionalityKey);

  }
}
