// <copyright file="Project.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    /// <summary>
    /// Represents a project in the application.
    /// </summary>
    [Table("Projects")]
    public class Project : BaseTrackedModel
    {
        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        /// <value>The Id.</value>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the Name.
        /// </summary>
        /// <value>The Name.</value>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the User.
        /// </summary>
        /// <value>The User.</value>
        public User User { get; set; }

        /// <summary>
        /// Gets or sets the UserId.
        /// </summary>
        /// <value>The UserId.</value>
        [Required]
        [ForeignKey(nameof(User))]
        public Guid UserId { get; set; }
    }
}