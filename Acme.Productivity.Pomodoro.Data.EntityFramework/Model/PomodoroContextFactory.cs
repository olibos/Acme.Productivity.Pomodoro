// <copyright file="PomodoroContextFactory.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Design;

    public class PomodoroContextFactory : IDesignTimeDbContextFactory<PomodoroContext>
    {
        /// <inheritdoc />
        public PomodoroContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PomodoroContext>();
            optionsBuilder.UseSqlServer("Server=localhost;Database=pomodoro-connect;Integrated Security=True");
            return new PomodoroContext(optionsBuilder.Options);
        }
    }
}