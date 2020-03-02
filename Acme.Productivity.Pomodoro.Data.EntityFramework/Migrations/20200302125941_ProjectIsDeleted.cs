﻿// <auto-generated/>
using Microsoft.EntityFrameworkCore.Migrations;

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Migrations
{
    /// <auto-generated/>
    public partial class ProjectIsDeleted : Migration
    {
        /// <auto-generated/>
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Projects",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_IsDeleted",
                table: "Projects",
                column: "IsDeleted");
        }

        /// <auto-generated/>
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Projects_IsDeleted",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Projects");
        }
    }
}
