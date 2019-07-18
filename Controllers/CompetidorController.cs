using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Prisma.Models;

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
        public IEnumerable<Competidor> Competidores()
        {
            return context.Competidores.ToList();
        }

        [HttpGet("[action]")]
        public Competidor Competidor(int id)
        {
            return context.Competidores.Where(c => c.Id == id).FirstOrDefault();
        }

        [HttpPut("[action]")]
        public void Modificar([FromBody] Competidor competidor)
        {
            
        }

        [HttpPost("[action]")]
        public void Insertar([FromBody] Competidor competidor)
        {
            
        }

        
    }
}
