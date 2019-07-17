using Microsoft.EntityFrameworkCore;

namespace Prisma.Models
{
    public class Context : Microsoft.EntityFrameworkCore.DbContext
    {
        public virtual DbSet<Competidor> Competidores { get; set; }
        public virtual DbSet<Marca> Marcas { get; set; }
        public virtual DbSet<ZonaPrecio> ZonaPrecios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //agregar archivo configuracion.
                optionsBuilder.UseSqlServer("server=BISHOP-PC\\SQLEXPRESS14;database=prisma;trusted_connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Competidor>().HasOne<Marca>(c => c.Marca);
            modelBuilder.Entity<Competidor>().HasOne<ZonaPrecio>(c => c.ZonaDePrecio);
        }
    }
}