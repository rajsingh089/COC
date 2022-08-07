import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './home/begin/begin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app-begin', component: BeginComponent },
  { path: 'app-home', component: HomeComponent },
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
