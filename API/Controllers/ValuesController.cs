using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly DataContex _context;

        public ValuesController(DataContex context)
        {
            this._context = context;

        }

        // GET: api/Values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> GetValuesTbl()
        {
            var values= await _context.ValuesTbl.ToListAsync();
            return Ok(values);
        }

        // GET: api/Values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> GetValue(int id)
        {
            var value = await _context.ValuesTbl.FindAsync(id);  //single or default dannath puluwan.

            if (value == null)
            {
                return NotFound();
            }

            return Ok(value);
        }

        // PUT: api/Values/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutValue(int id, Value value)
        {
            if (id != value.Id)
            {
                return BadRequest();
            }

            _context.Entry(value).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Values
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Value>> PostValue(Value value)
        {
            _context.ValuesTbl.Add(value);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetValue", new { id = value.Id }, value);
        }

        // DELETE: api/Values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Value>> DeleteValue(int id)
        {
            var value = await _context.ValuesTbl.FindAsync(id);
            if (value == null)
            {
                return NotFound();
            }

            _context.ValuesTbl.Remove(value);
            await _context.SaveChangesAsync();

            return value;
        }

        private bool ValueExists(int id)
        {
            return _context.ValuesTbl.Any(e => e.Id == id);
        }
    }
}
