export class Vehicle {
  name(name: any) {
    throw new Error('Method not implemented.');
  }
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: string;
  kilometraje: number;
  color: string;
  imagen: string;
  constructor({
    id,
    marca,
    linea,
    referencia,
    modelo,
    kilometraje,
    color,
    imagen,
  }: {
    id: number;
    marca: string;
    linea: string;
    referencia: string;
    modelo: string;
    kilometraje: number;
    color: string;
    imagen: string;
  }) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
  }
}
