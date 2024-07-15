import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzAddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    DbzListComponent,
    DbzAddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainPageComponent
  ]

})
export class DbzModule { }
