using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prisma.Models
{
    [Table("Competidores")]
    public class Competidor
    {
        [Key]
        public int Id {get;set;}
        [Required]
        public string Codigo {get;set;}
        [Required]
        public string Nombre {get;set;}
        public string Calle {get;set;}
        public decimal Latitud {get;set;}
        public decimal Longitud {get;set;}
        public bool Marcador {get;set;}
        public bool Observar {get;set;}
        [Required]
        public int MarcaId { get; set; }
        public Marca Marca {get;set;}
        [Required]
        public int ZonaPrecioId { get; set; }
        public ZonaPrecio ZonaPrecio {get;set;}
    }
}