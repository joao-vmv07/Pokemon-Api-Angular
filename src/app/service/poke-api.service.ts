import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  private urlAllPokemons: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5';
  private urlGetPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  public getApiListAllPokemons(url?: string): Observable<any> {
    return this.http.get<any>(url || this.urlAllPokemons).pipe(
      tap(resPokemons => {
        resPokemons.results.map((resPokemon: any) => {
          this.apiGetPokemonsByUrl(resPokemon.url).subscribe(res => resPokemon.info = res);
        })
      })
    )
  }

  public apiGetPokemonsByUrl(url: string): Observable<any> {
    return this.http.get<any>(url).pipe()
  }

  public apiGetPokemonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlGetPokemon}${id}`).pipe()
  }

  public apiGetPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.urlGetPokemon}${name}`).pipe()
  }
}
