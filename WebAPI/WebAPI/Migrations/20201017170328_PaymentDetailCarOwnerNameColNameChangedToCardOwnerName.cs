using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class PaymentDetailCarOwnerNameColNameChangedToCardOwnerName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CarOwnerName",
                table: "PaymentDetails",
                newName: "CardOwnerName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwnerName",
                table: "PaymentDetails",
                newName: "CarOwnerName");
        }
    }
}
