import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { CardPokemonDetailsComponent } from './card-pokemon-details/card-pokemon-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path:'pokemonDetails',
  component: CardPokemonDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
