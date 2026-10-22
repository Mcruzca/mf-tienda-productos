import { Component } from '@angular/core';
import { ProductosComponent } from './productos.component';

@Component({
  selector: 'app-root',
  imports: [ProductosComponent],
  template: '<h1>Productos funciona por separado</h1><app-productos />',
})
export class App {}

