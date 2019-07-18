using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prisma.Models
{
    [Table("ZonaPrecios")]
    public class ZonaPrecio
    {
        [Key]
        public int Id {get;set;}
        [Required]
        public string Codigo {get;set;}
        [Required]
        public string Nombre {get;set;}

        public ICollection<Competidor> Competidores { get; set; }
    }
}