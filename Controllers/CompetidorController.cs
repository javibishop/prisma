using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prisma.Models;
using System.Linq;

namespace Prisma.Controllers
{
    [Route("api/[controller]")]
    public class CompetidorController : Controller
    {
        private Context context = null;
        public CompetidorController(Context context)
        {
            this.context = context;
        }

        [HttpGet("[action]")]
        public JsonResult Competidores()
        {
            var result = context.Competidores.Include(c => c.Marca).Include(c => c.ZonaPrecio).Select(datos => new
            {
                Id = datos.Id,
                Codigo = datos.Codigo,
                Nombre = datos.Nombre,
                Calle = datos.Calle,
                Latitud = datos.Latitud,
                Longitud = datos.Longitud,
                Marcador = datos.Marcador,
                Observar = datos.Observar,
                MarcaId = datos.MarcaId,
                MarcaNombre = datos.Marca.Nombre,
                MarcaCodigo = datos.Marca.Codigo,
                ZonaPrecioId = datos.ZonaPrecioId,
                ZonaPrecioNombre = datos.ZonaPrecio.Nombre,
                ZonaPrecioCodigo = datos.ZonaPrecio.Codigo
            }).ToList();

            return Json(result);
        }

        [HttpGet("[action]")]
        public Competidor Competidor(int id)
        {
            return context.Competidores.Where(c => c.Id == id).FirstOrDefault();
        }

        [HttpPut("[action]")]
        public void Modificar([FromBody] Competidor competidor)
        {
            context.Update(competidor);
            context.SaveChanges();
        }

        [HttpPost("[action]")]
        public void Insertar([FromBody] Competidor competidor)
        {
            context.Add(competidor);
            context.SaveChanges();
        }

        [HttpDelete("[action]")]
        public void Eliminar(int id)
        {
            var competidor = context.Competidores.Where(c => c.Id == id).FirstOrDefault();
            context.Remove(competidor);
            context.SaveChanges();
        }
    }
}
