import { Component } from '@angular/core';
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
})
export class NuevoComponent {
  name: string = '';
  status: string = '';
  species: string = '';
  gender: string = '';
  origin: string = '';

  constructor(private detalleService: DetalleService) {}

  saveData() {
    // Obtener los valores de los campos de entrada utilizando la vinculación de datos de Angular
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const statusInput = document.getElementById('statusInput') as HTMLInputElement;
    const speciesInput = document.getElementById('speciesInput') as HTMLInputElement;
    const genderInput = document.getElementById('genderInput') as HTMLInputElement;
    const originInput = document.getElementById('originInput') as HTMLInputElement;

    // Obtener los valores de los campos de entrada
    this.name = nameInput.value;
    this.status = statusInput.value;
    this.species = speciesInput.value;
    this.gender = genderInput.value;
    this.origin = originInput.value;

    // Crea un objeto con los datos del personaje
    const characterData = {
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
    };

    // Llama al método `create` del servicio para guardar el personaje
    this.detalleService.create(characterData).subscribe(
      (response) => {
        // La operación de guardado fue exitosa
        console.log('Character saved successfully:', response);

        // Limpiar los campos de entrada
        nameInput.value = '';
        statusInput.value = '';
        speciesInput.value = '';
        genderInput.value = '';
        originInput.value = '';
      },
      (error) => {
        // Ocurrió un error al guardar el personaje
        console.error('Error saving character:', error);
      }
    );
    alert('Data saved successfully');
  }
}
