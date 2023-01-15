import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { SharedModule } from "../shared/shared.module";

//Pages
import { HomeComponent } from './home/home.component';
import { CardPokemonDetailsComponent } from './card-pokemon-details/card-pokemon-details.component';

//Routing
import { RoutingModule } from './routing-module';

//Componente
import { PokeSearchComponent } from '../shared/poke-search/poke-search.component';


@NgModule({
    declarations: [
        HomeComponent,
        CardPokemonDetailsComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
