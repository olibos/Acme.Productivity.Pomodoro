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
    public class Project
    {
        /// <summary>
        /// Gets or sets the CreatedBy.
        /// </summary>
        /// <value>The CreatedBy.</value>
        [Required]
        public string CreatedBy { get; set; }

        /// <summary>
        /// Gets or sets the CreationDate.
        /// </summary>
        /// <value>The CreationDate.</value>
        [Required]
        public DateTime CreationDate { get; set; }

        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        /// <value>The Id.</value>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this row is deleted.
        /// </summary>
        [Required]
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }

        /// <summary>
        /// Gets or sets the Name.
        /// </summary>
        /// <value>The Name.</value>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the UpdateDate.
        /// </summary>
        /// <value>The UpdateDate.</value>
        [Required]
        public DateTime UpdateDate { get; set; }

        /// <summary>
        /// Gets or sets the UpdatedBy.
        /// </summary>
        /// <value>The UpdatedBy.</value>
        [Required]
        public string UpdatedBy { get; set; }

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