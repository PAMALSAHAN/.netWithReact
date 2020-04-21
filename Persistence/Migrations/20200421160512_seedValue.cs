using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class seedValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ValuesTbl",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "pamal" });

            migrationBuilder.InsertData(
                table: "ValuesTbl",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "sahan" });

            migrationBuilder.InsertData(
                table: "ValuesTbl",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "chamath" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ValuesTbl",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ValuesTbl",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ValuesTbl",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
