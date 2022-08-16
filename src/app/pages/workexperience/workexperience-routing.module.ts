import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkexperienceComponent } from './workexperience.component';

const routes: Routes = [
  { path: '', component: WorkexperienceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkexperienceRoutingModule { }
