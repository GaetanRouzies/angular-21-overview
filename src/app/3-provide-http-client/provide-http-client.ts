import { Component, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { map } from 'rxjs'

interface Pokemon {
  name: string
  url: string
}

interface PokemonResponse {
  results: Pokemon[]
}

@Component({
  selector: 'app-provide-http-client',
  imports: [CommonModule],
  templateUrl: './provide-http-client.html',
})
export class ProvideHttpClient {
  private http = inject(HttpClient)

  pokemons$ = this.http
    .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')
    .pipe(map((response) => response.results))
}
