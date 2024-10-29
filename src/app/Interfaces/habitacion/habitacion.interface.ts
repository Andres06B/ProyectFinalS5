export interface Habitacion {
    id_habitacion: number;
    nombre: string;
    tipo: 'sencilla' | 'doble' | 'suite';
    precio: number;
    estado: 'disponible' | 'reservada' | 'ocupada';
}
