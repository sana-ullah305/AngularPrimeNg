using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PrimeNgContext : DbContext
    {
        public PrimeNgContext(DbContextOptions<PrimeNgContext> options)
            : base(options) 
        { }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
        public DbSet<PaymentDetailsMSCRow> PaymentDetailsMSCRows { get; set; }
    }
}
