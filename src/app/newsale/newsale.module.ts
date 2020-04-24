import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsalePageRoutingModule } from './newsale-routing.module';

import { NewsalePage } from './newsale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsalePageRoutingModule
  ],
  declarations: [NewsalePage]
})
export class NewsalePageModule {}
