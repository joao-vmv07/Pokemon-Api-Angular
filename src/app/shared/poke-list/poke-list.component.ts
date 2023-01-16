import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokemonsApi: any;
  public pokemonsListagem: any;
  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      pokemons => {
        this.pokemonsApi = pokemons.results;
        this.pokemonsListagem = this.pokemonsApi;
      });
      console.log('Inicio');
  }
  public getSearch(value:string){
    const filter = this.pokemonsApi.filter((res: any) =>{
      return !res.name.indexOf(value.toLocaleLowerCase());
    });
    this.pokemonsListagem = filter;
  }
}
