import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsalePage } from './newsale.page';

const routes: Routes = [
  {
    path: '',
    component: NewsalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsalePageRoutingModule {}
