import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Module
import { SharedModule } from "../shared/shared.module";

//Pages
import { CardPokemonDetailsComponent } from './card-pokemon-details/card-pokemon-details.component';
import { HomeComponent } from './home/home.component';

//Routing
import { RoutingModule } from './routing-module';



@NgModule({
    declarations: [
        HomeComponent,
        CardPokemonDetailsComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule,
    ]
})
export class PagesModule { }
