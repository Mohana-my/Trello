import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColumnComponent } from './column/column.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path:"",component:DashboardComponent,children: [
    {
      path: 'trello',
      component: NavComponent
    }
  ]},
  {path:"trello/:id/:name",component:ColumnComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[DashboardComponent,ColumnComponent,NavComponent]