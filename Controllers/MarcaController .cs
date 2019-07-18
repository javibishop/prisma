using Microsoft.AspNetCore.Mvc;
using Prisma.Models;
using System.Collections.Generic;
using System.Linq;

namespace Prisma.Controllers
{
    [Route("api/[controller]")]
    public class MarcaController : Controller
    {
        private Context context = null;
        public MarcaController(Context context)
        {
            this.context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Marca> Marcas()
        {
            return context.Marcas.ToList();
        }
    }
}
