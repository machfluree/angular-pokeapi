import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) },
  { path: 'work-exp', loadChildren: () => import('./pages/workexperience/workexperience.module').then(m => m.WorkexperienceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
