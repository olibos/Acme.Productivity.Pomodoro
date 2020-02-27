// <copyright file="PomodoroContext.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.Linq;

    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Represents the main database context.
    /// </summary>
    public class PomodoroContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PomodoroContext"/> class.
        /// </summary>
        /// <param name="options">Options to configure the context.</param>
        public PomodoroContext(DbContextOptions<PomodoroContext> options)
            : base(options)
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