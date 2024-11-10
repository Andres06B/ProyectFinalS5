export interface Pasarela {
    id_pago: number;
    id_reserva: number;
    monto: number; 
    metodo_pago: 'tarjeta';
    estado: 'pendiente' | 'cancelada' | 'realizado';
    fecha_pago: Date;
}
