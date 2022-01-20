
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalServiceService } from '../goal-service.service';
// import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  


})
export class GoalComponent implements OnInit {

  goals: Goal[] = [];
  // alertService:AlertService;
  // quote:Quote;
  // goals: Goal[] = [
  //   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,6,9)),
  //   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2026,6,9)),
  //   new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
  //   new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
  //   new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
  //   new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  // ];




  constructor(goalserve: GoalServiceService, private quoteService:GoalServiceService ) {
    this.goals = goalserve.getgoals()

  }
  toggleDetails(ok: any) {
    this.goals[ok].showDescription = !this.goals[ok].showDescription;
  }

  // goToUrl(ok:any){
  //   this.goals[ok].showDescription = !this.goals[ok].showDescription;
  // }

  isLoading!: false;
  demo() {
    this.isLoading!
  }
  ngOnInit(){
    this.quoteService.quoteRequest()
    
  }


}
