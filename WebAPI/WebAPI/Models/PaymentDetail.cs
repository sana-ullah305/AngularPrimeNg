using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PaymentDetail
    {
        public PaymentDetail()
        {
            this.PaymentDetailsMSCRows = new List<PaymentDetailsMSCRow>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PMId { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string CardOwnerName { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(16)")]
        public string CardNumber { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(5)")]
        public string ExpirationsDate { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(3)")]
        public string CVV { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(64)")]
        public string Country { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(64)")]
        public string State { get; set; }

        [Column(TypeName = "NVARCHAR(246)")]
        public string Narrtions { get; set; }

        public int? Rating { get; set; }

        public virtual ICollection<PaymentDetailsMSCRow> PaymentDetailsMSCRows { get; set; }
    }
}
