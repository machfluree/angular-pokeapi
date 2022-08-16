import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkexperienceRoutingModule } from './workexperience-routing.module';
import { WorkexperienceComponent } from './workexperience.component';


@NgModule({
  declarations: [
    WorkexperienceComponent
  ],
  imports: [
    CommonModule,
    WorkexperienceRoutingModule
  ]
})
export class WorkexperienceModule { }
