using Microsoft.EntityFrameworkCore;

namespace Prisma.Models
{
    public class Context : Microsoft.EntityFrameworkCore.DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Competidor> Competidores { get; set; }
        public virtual DbSet<Marca> Marcas { get; set; }
        public virtual DbSet<ZonaPrecio> ZonaPrecios { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Competidor>().HasOne<Marca>(c => c.Marca);
            modelBuilder.Entity<Competidor>().HasOne<ZonaPrecio>(c => c.ZonaPrecio);

            modelBuilder.Entity<Marca>().HasData(
                new Marca
                {
                    Id = 1,
                    Codigo = "CF",
                    Nombre = "Carrefour"
                },
                new Marca
                {
                    Id = 2,
                    Codigo = "CFE",
                    Nombre = "Carrefour Express"
                },
                new Marca
                {
                    Id = 3,
                    Codigo = "CO",
                    Nombre = "Coto"
                },
                new Marca
                {
                    Id = 4,
                    Codigo = "VEA",
                    Nombre = "Vea"
                }
           );

            modelBuilder.Entity<ZonaPrecio>().HasData(
               new ZonaPrecio
               {
                   Id = 1,
                   Codigo = "N",
                   Nombre = "Norte"
               },
                new ZonaPrecio
                {
                    Id = 2,
                    Codigo = "S",
                    Nombre = "Sur"
                },
                new ZonaPrecio
                {
                    Id = 3,
                    Codigo = "E",
                    Nombre = "Este"
                },
                new ZonaPrecio
                {
                    Id = 4,
                    Codigo = "O",
                    Nombre = "Oeste"
                }
           );
        }
    }
}