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
        public DbSet<Activity> ActivityTbl { get; set; } 

        protected override void  OnModelCreating(ModelBuilder builder){
            builder.Entity<Value>()
            .HasData(
                new Value{Id=1,Name="pamal"},
                new Value{Id=2,Name="sahan"},
                new Value{Id=3,Name="chamath"}
            );
        }
    }
}