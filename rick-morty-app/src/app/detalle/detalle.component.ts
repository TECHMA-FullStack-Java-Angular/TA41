import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  characterId!: number;
  character: any;

  constructor(private detalleService: DetalleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = params['id'];
      this.detalleService.fetchCharacter(this.characterId).subscribe(
        (result: any) => {
          this.character = result;
        },
        (error: any) => {
          console.error('Error fetching character:', error);
        }
      );
    });
  }
}







