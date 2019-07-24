export class Competidor {
    constructor(
        public id :number,
        public codigo :string,
        public nombre :string,
        public calle :string,
        public latitud :number,
        public longitud :number,
        public marcador :boolean,
        public observar :boolean,
        public marcaId :number,
        public zonaPrecioId :number
        )
        {}
}

export class CompetidorList {
    constructor(
        public id :number,
        public codigo :string,
        public nombre :string,
        public calle :string,
        public latitud :number,
        public longitud :number,
        public marcador :boolean,
        public observar :boolean,
        public marcaId :number,
        public zonaPrecioId :number,
        public marcaCodigo :string,
        public zonaPrecioCodigo: string,
        public marcaNombre: string,
        public zonaPrecioNombre: string,
        )
        {}
}
