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
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.personajesService.fetchCharacters().subscribe(
      result => {
        this.characters = result;
      },
      error => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  seeMore(character: any) {
    this.router.navigate(['/detalles', character.id]);
  }
}
