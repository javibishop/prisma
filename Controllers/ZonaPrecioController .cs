using Microsoft.AspNetCore.Mvc;
using Prisma.Models;
using System.Collections.Generic;
using System.Linq;

namespace Prisma.Controllers
{
    [Route("api/[controller]")]
    public class ZonaPrecioController : Controller
    {
        private Context context = null;
        public ZonaPrecioController(Context context)
        {
            this.context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<ZonaPrecio> ZonaPrecios()
        {
            return context.ZonaPrecios.ToList();
        }
    }
}
