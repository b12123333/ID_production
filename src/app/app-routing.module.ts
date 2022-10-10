import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IDComponent } from './id/id.component';

const routes: Routes = [
  {
    path: '',
    component: IDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
