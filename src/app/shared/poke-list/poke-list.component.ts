import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private pokemonsApi: any;
  public pokemonsListagem: any;
  public urlProximaListagem!: string;
  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons(url?: string) {
    this.pokeApiService.getApiListAllPokemons(url).subscribe(
      pokemons => {
        console.log(pokemons)
        this.pokemonsApi = pokemons.results;
        this.urlProximaListagem = pokemons.next;
        this.pokemonsListagem = this.pokemonsApi;
      });
  }

  public getSearch(valorDePesquisa: string) {
    const filter = this.pokemonsApi.filter((pokemon: any) => {
      return !pokemon.name.indexOf(valorDePesquisa.toLocaleLowerCase());
    });
    this.pokemonsListagem = filter;
  }

  public proximaListagemPokemons() {
    this.getPokemons(this.urlProximaListagem);
  }
}
