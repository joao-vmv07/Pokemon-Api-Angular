import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private pokemonsApi: any;
  public pokemonsListagem: any;
  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons() {
    this.pokeApiService.getApiListAllPokemons().subscribe(
      pokemons => {
       console.log(pokemons);
        this.pokemonsApi = pokemons.results;
        this.pokemonsListagem = this.pokemonsApi;
      });
  }

  public getSearch(valorDePesquisa: string) {
    const filter = this.pokemonsApi.filter((pokemon: any) => {
      return !pokemon.name.indexOf(valorDePesquisa.toLocaleLowerCase());
    });
    debugger
    this.pokemonsListagem = filter;
  }
}
