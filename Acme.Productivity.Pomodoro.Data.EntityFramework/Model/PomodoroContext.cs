// <copyright file="PomodoroContext.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.Linq;

    using Microsoft.EntityFrameworkCore;

    public class PomodoroContext : DbContext
    {
        public PomodoroContext(DbContextOptions<PomodoroContext> options) : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the Users.
        /// </summary>
        /// <value>The Users.</value>
        public DbSet<User> Users { get; set; }

        /// <inheritdoc />
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex("UserName").IsUnique();
        }
    }
}