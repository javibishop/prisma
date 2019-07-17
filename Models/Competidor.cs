namespace Prisma.Models
{
    public class Competidor
    {
        public int Id {get;set;}
        public string Codigo {get;set;}
        public string Nombre {get;set;}
        public string Calle {get;set;}
        public decimal Latitud {get;set;}
        public decimal Longitud {get;set;}
        public bool Marcador {get;set;}
        public bool Observar {get;set;}
        public Marca Marca {get;set;}
        public ZonaPrecio ZonaDePrecio {get;set;}
    }
}