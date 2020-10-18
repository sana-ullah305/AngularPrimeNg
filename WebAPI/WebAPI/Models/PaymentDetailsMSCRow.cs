using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PaymentDetailsMSCRow
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string CountryName { get; set; }
        public string CountryCode { get; set; }
        [ForeignKey("PaymentDetail")]
        public int PaymentDetailId { get; set; }

        public virtual PaymentDetail PaymentDetail { get; set; }
    }
}
