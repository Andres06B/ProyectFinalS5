export interface Usuario {
    id_usuario: number;
    tipo_documento: string;
    numero_documento: string;
    nombre: string;
    apellido: string;
    email: string;
    fecha_nacimiento: Date;
    telefono: string;
    ciudad: string;
    pais: string;
    direccion: string;
    acompañantes?: Acompañante[];
}

export interface Acompañante {
    id_acompañante: number;
    usuario: number;
    nombre: string;
    tipo_documento: string;
    numero_documento: string;
    
}
