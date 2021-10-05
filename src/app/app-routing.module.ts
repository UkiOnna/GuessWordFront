import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessPageComponent } from './components/guess-page/guess-page.component';

const routes: Routes = [
  {
    path: '', component: GuessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
