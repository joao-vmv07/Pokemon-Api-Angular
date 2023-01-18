import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-card-pokemon-details',
  templateUrl: './card-pokemon-details.component.html',
  styleUrls: ['./card-pokemon-details.component.scss']
})
export class CardPokemonDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: PokeApiService) { }

  public pokemonDetalhes: any;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
      this.apiService.apiGetPokemonById(id).subscribe(detalhes => {
      this.pokemonDetalhes = detalhes;
    })
  }
}
