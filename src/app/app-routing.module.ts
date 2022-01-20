import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AboutComponent } from './about/about.component';
 import { GoalComponent } from './goal/goal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'goal', component: GoalComponent },
  
 { path: 'about', component: AboutComponent },

   { path: '', redirectTo: '/goal', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
