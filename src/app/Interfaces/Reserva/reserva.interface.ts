export interface Reserva {
    id_reserva: number;
    fecha_reserva: Date;
    fecha_entrada: Date;
    fecha_salida: Date;
    estado: 'pendiente' | 'cancelada' | 'realizada';
    id_usuario: number;
    id_habitacion: number;
}
