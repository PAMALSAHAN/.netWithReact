using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContex : DbContext
    {
        public DataContex(DbContextOptions opt) : base(opt)
        {
            
        }
        
        public DbSet<Value> ValuesTbl { get; set; }  //value table eka hadanne mehemai
    }
}