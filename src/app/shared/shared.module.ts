import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokerHeaderComponent } from './poker-header/poker-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokerHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokerHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
