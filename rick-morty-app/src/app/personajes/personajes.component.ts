import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  characters: any[] = [];

  constructor(private personajesService: PersonajesService, private router: Router) {}

  ngOnInit() {
    this.personajesService.fetchCharacters().subscribe(
      result => {
        if (result.results && Array.isArray(result.results)) {
          this.characters = result.results;
        } else {
          console.error('API response is not as expected:', result);
        }
      },
      error => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  seeMore(character: any) {
   
    // Alternatively, you can navigate to the details page using the Angular router:
    this.router.navigate(['/detalles', character.id]);
  }
}
