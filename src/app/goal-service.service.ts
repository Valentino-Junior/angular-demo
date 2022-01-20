import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from './quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  quote: Quote;

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,6,9)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2026,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];

  getgoals() {
    return this.goals
  }
  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
   }

   quoteRequest(){
    interface ApiResponse{
      quote:string;
      author:string;
    }
  
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = "Never, never, never give up"
        this.quote.author = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
}
