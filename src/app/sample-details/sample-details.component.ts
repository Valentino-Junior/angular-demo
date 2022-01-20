import { Component, OnInit,Input, } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-sample-details',
  templateUrl: './sample-details.component.html',
  styleUrls: ['./sample-details.component.css']
})
export class SampleDetailsComponent implements OnInit {
  @Input() eventChild!: Goal;
  constructor() { }

  ngOnInit(): void {
  }

}
