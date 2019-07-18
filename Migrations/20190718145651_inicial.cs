using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prisma.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Marcas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Codigo = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marcas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ZonaPrecios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Codigo = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZonaPrecios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Competidores",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Codigo = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Calle = table.Column<string>(nullable: true),
                    Latitud = table.Column<decimal>(nullable: false),
                    Longitud = table.Column<decimal>(nullable: false),
                    Marcador = table.Column<bool>(nullable: false),
                    Observar = table.Column<bool>(nullable: false),
                    MarcaId = table.Column<int>(nullable: false),
                    ZonaPrecioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competidores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Competidores_Marcas_MarcaId",
                        column: x => x.MarcaId,
                        principalTable: "Marcas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Competidores_ZonaPrecios_ZonaPrecioId",
                        column: x => x.ZonaPrecioId,
                        principalTable: "ZonaPrecios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Marcas",
                columns: new[] { "Id", "Codigo", "Nombre" },
                values: new object[,]
                {
                    { 1, "CF", "Carrefour" },
                    { 2, "CFE", "Carrefour Express" },
                    { 3, "CO", "Coto" },
                    { 4, "VEA", "Vea" }
                });

            migrationBuilder.InsertData(
                table: "ZonaPrecios",
                columns: new[] { "Id", "Codigo", "Nombre" },
                values: new object[,]
                {
                    { 1, "N", "Norte" },
                    { 2, "S", "Sur" },
                    { 3, "E", "Este" },
                    { 4, "O", "Oeste" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Competidores_MarcaId",
                table: "Competidores",
                column: "MarcaId");

            migrationBuilder.CreateIndex(
                name: "IX_Competidores_ZonaPrecioId",
                table: "Competidores",
                column: "ZonaPrecioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Competidores");

            migrationBuilder.DropTable(
                name: "Marcas");

            migrationBuilder.DropTable(
                name: "ZonaPrecios");
        }
    }
}
