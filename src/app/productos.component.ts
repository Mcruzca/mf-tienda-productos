import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-productos',
  template: `
    <section>
      <small>REPOSITORIO 2 · código servido desde localhost:4201</small>
      <h2>Soy el microfrontend de productos</h2>
      <p>Cuaderno — S/ 12</p>
      <button (click)="cantidad.update(incrementar)">Añadir al carrito</button>
      <p aria-live="polite">Unidades: {{ cantidad() }}</p>
      <p>Este contador pertenece al microfrontend.</p>
    </section>
  `,
  styles: [`section { border: 2px solid #15803d; background: #f0fdf4; padding: 24px; border-radius: 12px; }
    button { background: #166534; color: white; border: 0; border-radius: 6px; padding: 12px 18px; cursor: pointer; }`],
})
export class ProductosComponent {
  cantidad = signal(0);
  incrementar = (valor: number) => valor + 1;
}

